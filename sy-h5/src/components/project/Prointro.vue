<template>
    <div class="prointro-wrapper">
        <common-title :mainTitle="proTtile1.mainTitle" :smallTitle="proTtile1.smallTitle"></common-title>
        <div class="pro-html" v-html="content"></div>
        <common-title :mainTitle="proTtile2.mainTitle" :smallTitle="proTtile2.smallTitle"></common-title>
        <div class="chart-wrapper">
            <div class="chart-wrapper-item chart-wrapper-item-icon1">
                加入出借项目
            </div>
            <div class="chart-wrapper-item-rowwor"></div>
            <div class="chart-wrapper-item chart-wrapper-item-icon2">
                自动匹配债权
            </div>
            <div class="chart-wrapper-item-rowwor"></div>
            <div class="chart-wrapper-item chart-wrapper-item-icon3">
                借款人按月还款
            </div>
            <div class="chart-wrapper-item-rowwor"></div>
            <div class="chart-wrapper-item chart-wrapper-item-icon4">
                本金+利息
            </div>
            <div class="chart-wrapper-item-rowwor"></div>
            <div class="chart-wrapper-item chart-wrapper-item-icon5">
                到期退出
            </div>
        </div>
        <common-title :mainTitle="proTtile3.mainTitle" :smallTitle="proTtile3.smallTitle"></common-title>
        <div class="p-in-con">
            <p>此类借款是中财微银平台自动匹配债权，债权匹配主要的投资方向包含银行承兑类票据业务，银行贷款垫资业务，以及个人信用，供应链金融，应收账款。</p>
            <div class="p-in-con-back">

            </div>
        </div>
        <div class="pro-ts">安心理财，收益稳健。中财微银平台仅为信息中介。建议投资用户在了解项目信息、风控信息、项目材料等基础上，根据自身风险承受能力，进行投资，亦可分散出借多个标的，降低风险。</div>

    </div>

</template>
<style lang="less">
@import "../../common/less/index.less";
.prointro-wrapper {
  font-size: 28 / @rem;
  padding: 0 30 / @rem;
  box-sizing: border-box;
  .pro-html {
    margin-bottom: 20 / @rem;
    p {
      font-size: 28 / @rem;
      line-height: 40 / @rem;
      color: #666;
    }
  }
  .chart-wrapper {
    padding: 50 / @rem;
    box-sizing: border-box;
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    justify-content: center;
    .chart-wrapper-item {
      padding-top: 88 / @rem;
      font-size: 24 / @rem;
      margin-bottom: 30 / @rem;
      line-height: 64 / @rem;
      text-align: center;
      background-size: 88 / @rem 88 / @rem;
      background-position: top center;
      &.chart-wrapper-item-icon1 {
        .bg-image("/static/img/pri1");
      }
      &.chart-wrapper-item-icon2 {
        .bg-image("/static/img/pri2");
      }
      &.chart-wrapper-item-icon3 {
        .bg-image("/static/img/pri3");
      }
      &.chart-wrapper-item-icon4 {
        .bg-image("/static/img/pri4");
      }
      &.chart-wrapper-item-icon5 {
        .bg-image("/static/img/pri5");
      }
    }
    .chart-wrapper-item-rowwor {
      width: 66 / @rem;
      height: 10 / @rem;
      .bg-image("/static/img/arrow-left");
      background-size: 66 / @rem 10 / @rem;
      margin-top: 40 / @rem;
    }
  }
  .p-in-con {
    p {
      font-size: 28 / @rem;
      line-height: 40 / @rem;
      color: #666;
    }
    .p-in-con-back {
      width: 100%;
      height: 260 / @rem;
      .bg-image("/static/img/flow-chat");
      background-size: 618 / @rem 260 / @rem;
      margin-top: 40 / @rem;
      margin-bottom: 100/@rem;
      background-position: center center;
    }
  }
  .pro-ts{
      color: #e30920;
      line-height: 40/@rem;
      font-size: 24/@rem;
  }
}
</style>

<script>
import { articleApi } from "@/api/user-wwl.js";
import CommonTitle from "@/base/Title.vue";
export default {
  data() {
    return {
      content: "",
      proTtile1: {
        mainTitle: "项目介绍",
        smallTitle: "Project Description"
      },
      proTtile2: {
        mainTitle: "出借项目原理",
        smallTitle: "Project Principle"
      },
      proTtile3: {
        mainTitle: "债权投资方向",
        smallTitle: "Debt investment direction"
      }
    };
  },
  computed: {},
  created() {
    this.getContent();
  },
  methods: {
    getContent() {
      articleApi.content2(this.$route.params.id).then(_response => {
        this.content = _response;
      });
    }
  },
  components: {
    CommonTitle
  }
};
</script>
