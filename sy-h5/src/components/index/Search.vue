<template>
    <div>

        <be-scroll :pullup="pullup" :pulldown="pulldown" @scrollPullDown="PullDown" @scrollToEnd="pullUp">

            <div class="search-wrapper">
                <div class="loading" :style="{top:top}">
                    <img src="/static/img/loading.gif" alt="">
                </div>
                <div class="project-list">
                    <div v-for="item in ProjectList" :key="item.id">
                        <project-item :item="item"></project-item>
                        <line-color></line-color>
                    </div>
                </div>
                <div v-show="moreData">
                    加载更多。。。
                </div>
            </div>

        </be-scroll>
    </div>

</template>
<script>
import ProjectItem from "./../modal/ProjectItem";
import BeScroll from "@/base/Scroll.vue";
import LineColor from "@/base/Line.vue";
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
      dicList: [],
      top: -100,
      moreData: false,
      pullup: true,
      pulldown: true
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
      this.moreData = false;
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
    PullDown(val) {
      this.top = val;
      this.param.pageNo = 1;
      this.getProjectList();
    },
    pullUp() {
      this.moreData = true;
      this.param.pageNo++;
      this.getProjectList();
    }
  },
  components: {
    ProjectItem,
    LineColor,
    BeScroll
  }
};
</script>
<style lang="less" scoped>
@import "../../common/less/index.less";
.loading {
  position: absolute;
  top: -200 / @rem;
  width: 100%;
  img {
    max-width: 200 / @rem;
    width: 100%;
    display: block;
    margin: 0 auto;
  }
}
.search-wrapper {
  position: absolute;
  height: 100%;
  width: 100%;
}
.project-wrapper {
  width: 100%;
  .project-list {
    width: 100%;
  }
}
.project-fixed {
  position: fixed;
  top: 168 / @rem;
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
