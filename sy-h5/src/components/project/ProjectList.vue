<template>
  <div class="project-wrapper">

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
</style>
<script>
import ProjectItem from "../modal/ProjectItem";
import LineColor from "@/base/Line.vue";
import PullRefresh from "../modal/pullrefresh.vue";
import { bannerApi, projectApi } from "@/api/user-wwl";
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
      proList: {},
      ProjectList: {},
      scrollData: {
        noFlag: false //暂无更多数据显示
      }
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

