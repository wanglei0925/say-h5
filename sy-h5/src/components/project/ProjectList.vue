<template>
  <div class="project-wrapper">

    <div class="project-select">
      <div class="project-select-item" :class="{'project-select-item-active':checkflag ==1&&dicList!=''}" @touchend.stop="showModal('1')">
        <span>
          产品类型
        </span>
        <i></i>
      </div>
      <div class="project-select-item border-rl" :class="{'project-select-item-active':checkflag ==2&&dicList!=''}" @touchend.stop="showModal('2')">
        <span>
          锁定期限
        </span>
        <i></i>
      </div>
      <div class="project-select-item" :class="{'project-select-item-active':checkflag ==3&&dicList!=''}" @touchend.stop="showModal('3')">
        <span>
          项目状态
        </span>
        <i></i>
      </div>
      <div class="project-fixed" v-show="this.dicList!=''">
        <div class="project-detail" v-show="this.dicList!=''">
          <div class="project-detail-item" v-for="(item,index) in dicList" :key="index">
            <label :for="'type'+index" :class="{'lable-active':item.value == checkval}" @change="choose()">
              <input v-if="checkflag ==1" type="radio" v-model="param.type" :value="item.value" name="" :id="'type'+index">
              <input v-if="checkflag ==2" type="radio" v-model="param.term" :value="item.value" name="" :id="'type'+index">
              <input v-if="checkflag ==3" type="radio" v-model="param.state" :value="item.value" name="" :id="'type'+index"> {{item.name}}
              <i></i>
            </label>
          </div>
        </div>

      </div>
    </div>

    <pull-refresh :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
      <div class="project-list">
        <div v-for="item in ProjectList" :key="item.id">
          <project-item :item="item"></project-item>
          <line-color></line-color>
        </div>
      </div>
    </pull-refresh>

  </div>
</template>
<style lang="less" scoped>
@import "../../common/less/index.less";
.project-wrapper {
  width: 100%;
  .project-list {
    width: 100%;
  }
}
.project-fixed {
  position: fixed;
  top: 168/@rem;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
  background: rgba(0, 0, 0, 0.3);
}
.project-select {
  width: 100%;
  height: 88 / @rem;
  padding: 20 / @rem;
  line-height: 44 / @rem;
  box-sizing: border-box;
  display: flex;
  display: -webkit-flex;
  justify-content: space-around;
  .border-bottom(#dddddd);
  position: relative;
  z-index: 1001;
}
.project-select-item {
  max-width: 50%;
  flex: 1 1 auto;
  font-size: 28 / @rem;
  text-align: center;
}
.project-select-item i {
  border: 8 / @rem solid transparent;
  border-top: 8 / @rem solid #ccc;
  margin-left: 10 / @rem;
  transition: transform ease-out 0.3s;
  display: inline-block;
  vertical-align: middle;
  transition: all 0.5s;
}
.project-select-item-active {
  color: #e30920;
}
.project-select-item-active i {
  margin-top: -8 / @rem;
  border-top: 8 / @rem solid #e30920;
  transform: rotate(180deg);
}
.border-rl {
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
}
.project-detail {
  position: absolute;
  top: 0;
  width: 100%;
  overflow-y: auto;
  background: #fff;
  z-index: 102;
}
.project-detail-item {
  padding: 0 50 / @rem;
  box-sizing: border-box;

  label {
    font-size: 24 / @rem;
    line-height: 24 / @rem;
    padding: 20 / @rem 0;

    position: relative;
    display: block;
    &.lable-active {
      color: #e30920;
      i {
        position: absolute;
        top: 50%;
        right: 50 / @rem;
        content: "";
        width: 20 / @rem;
        height: 30 / @rem;
        color: black;
        border-bottom: 2px solid #e30920;
        border-right: 2px solid #e30920;
        transform-origin: center;
        transform: translate(-50%, -50%) rotate(45deg);
        -webkit-transform: translate(-50%, -50%) rotate(45deg);
      }
    }
    input {
      display: none;
    }
  }
}
</style>
<script>
import ProjectItem from "../modal/ProjectItem";
import LineColor from "@/base/Line.vue";
import PullRefresh from "../modal/pullrefresh.vue";
import { bannerApi, projectApi } from "@/api/user-wwl";
import * as types from "@/api/mock-data.js";
export default {
  data() {
    return {
      param: {
        type: "",
        term: "0~0",
        state: "",
        pageNo: "1",
        pageSize: "10"
      },
      checkflag: "",
      checkval: "",
      proList: {},
      ProjectList: {},
      scrollData: {
        noFlag: false //暂无更多数据显示
      },
      dicList: []
    };
  },
  props: {},
  computed: {},
  mounted() {
    this.getProjectList();
  },
  methods: {
    toPage(val) {
      this.$router.push(val);
    },
    getProjectList() {
      projectApi.page(this.param).then(response => {
        if (response.status) {
          this.proList = response.data;
          if (this.param.pageNo == 1) {
            this.ProjectList = response.data.list;
          } else {
            this.ProjectList = this.ProjectList.concat(response.data.list);
          }
        }
      });
    },
    showModal(val) {
      this.checkflag = val;
      if (this.dicList != "") {
        this.dicList = [];
      } else {
        if (val == 1) {
          this.checkval = this.param.type;
          this.dicList = types.PRO_TYPE;
        } else if (val == 2) {
          this.checkval = this.param.term;
          this.dicList = types.PRO_TERM;
        } else if (val == 3) {
          this.checkval = this.param.state;
          this.dicList = types.PRO_STATE;
        } else {
          this.dicList = [];
        }
      }
    },
    // 筛选
    choose() {
      this.dicList = [];
      this.getProjectList();
    },
    // 刷新
    onRefresh(done) {
      this.param.pageNo = 1;
      this.ProjectList = [];
      this.getProjectList();
      this.scrollData.noFlag = false;
      done(); // call done
    },
    // 下一页
    onInfinite(done) {
      this.param.pageNo++;
      let more = this.$el.querySelector(".load-more");
      more.style.display = "none"; //隐藏加载条
      if (this.param.pageNo > this.proList.pages) {
        //走完数据调用方法
        this.scrollData.noFlag = true;
        done();
        return;
      } else {
        this.getProjectList();
        done();
      }
    }
  },
  components: {
    ProjectItem,
    LineColor,
    PullRefresh
  }
};
</script>

