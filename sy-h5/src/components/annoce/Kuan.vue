<template>
    <div>
        <div class="artical-list">
            <div class="artical-item" v-for="(item,index) in article" :key="index">
                <div class="icon" :class="{'active':index==0}"></div>
                <div class="text">
                    <div class="text-title">
                        {{item.loanUserRealName}}
                    </div>
                    <div class="text-dec">
                        成功放款{{item.loanCharge | currency(1)}} 元
                    </div>
                </div>
                <div class="time">
                    {{item.asyncTime | format('yyyy-MM-dd')}}
                </div>
            </div>
        </div>

    </div>

</template>
<script>
import PullRefresh from "@/components/modal/pullrefresh";
import { tradeApi } from "@/api/user-wwl.js";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      param: {
        type: "3",
        pageNo: "1",
        pageSize: "10"
      },
      article: {},
      articleList: {},
      scrollData: {
        noFlag: false //暂无更多数据显示
      }
    };
  },
  created() {
    this.getArticle();
  },
  computed: {
    ...mapGetters(["touchFlag"])
  },
  methods: {
    ...mapActions(["touchStart", "touchMove"]),
    getArticle() {
      tradeApi.loanList().then(response => {
        this.article = response.data;
        console.log(response);
      });
    },

    toPage(url) {
      console.log(this.touchFlag);
      if (this.touchFlag) {
        this.$router.push(url);
      }
    },
    // 刷新
    onRefresh(done) {
      this.param.pageNo = 1;
      this.ProjectList = [];
      this.getArticle();
      this.scrollData.noFlag = false;
      done(); // call done
    },
    // 下一页
    onInfinite(done) {
      this.param.pageNo++;
      let more = this.$el.querySelector(".load-more");
      more.style.display = "none"; //隐藏加载条
      if (this.param.pageNo > this.article.pages) {
        //走完数据调用方法
        this.scrollData.noFlag = true;
        done();
        return;
      } else {
        this.getArticle();
        done();
      }
    }
  },
  components: {
    PullRefresh
  }
};
</script>
<style lang="less" scoped>
@import "../../common/less/index.less";
.yo-scroll {
  top: 88 / @rem!important;
}
.artical-item {
  display: flex;
  justify-content: flex-start;
  margin-left: 30 / @rem;
  padding: 30 / @rem 0;
  box-sizing: border-box;
  align-items: center;
  .border-bottom(#ddd);
  .icon {
    .bg-image("/static/img/oldinfo1");
    width: 50 / @rem;
    height: 50 / @rem;
    position: relative;
    margin-right: 20 / @rem;
    &.active::after {
      content: " ";
      position: absolute;
      width: 10 / @rem;
      height: 10 / @rem;
      background: #e30920;
      top: 1 / @rem;
      right: 0;
      border-radius: 50%;
    }
  }
  .text {
    flex: 1;
    .text-title {
      font-size: 28 / @rem;
      line-height: 28 / @rem;
      margin-bottom: 20 / @rem;
      color: #333;
    }
    .text-dec {
      font-size: 24 / @rem;
      line-height: 30 / @rem;
      color: #999;
    }
  }
  .time {
    font-size: 24 / @rem;
    line-height: 24 / @rem;
    color: #999;
    padding-right: 30 / @rem;
  }
}
</style>
