<template>
  <div class="project-item" @touchstart="touchStart()" @touchmove="touchMove()" @touchend="toPage({name:'projectdetail',params:{id:item.id}})">
    <div class="projtct-item-top" :class="{'over':item.state>1,'active':item.state<=1}" v-if="position == 1">
      {{item.title}}
    </div>
    <div class="projtct-item-top-2" v-if="position == 2">
      <span v-show="item.state>1" class="projtct-item-top-icon" :class="classMapgrey[item.type-1]">

      </span>
      <span v-show="item.state<=1" class="projtct-item-top-icon" :class="classMapred[item.type-1]">

      </span>
      <span class="projtct-item-top-text" :class="{'over':item.state>1,'active':item.state<=1}">{{item.title}}</span>

    </div>
    <div class="project-tips" v-if="position == 1">
      抓住机会，选择合理的理财
    </div>
    <div class="project-detail">
      <div class="project-detail-item">
        <div class="project-detail-num">
          <span :class="{'grey':item.state>1,'red':item.state<=1}">
            <b>{{item.rate}}</b>%</span>
        </div>
        <div class="project-detail-text">
          年化收益率
        </div>
      </div>
      <div class="project-detail-item" :class="{'order':position == 1}">
        <div class="project-detail-num">
          {{item.deadline}}天
        </div>
        <div class="project-detail-text">
          锁定期限
        </div>
      </div>

      <div class="project-detail-item">
        <div class="project-detail-num">
          {{item.investCharge/100}}元
        </div>
        <div class="project-detail-text">
          项目金额
        </div>
      </div>
    </div>
    <div class="project-bttom">
      <span class="project-bttom-icon" :class="{'icon-grey':item.state>1,'icon-red':item.state<=1}">

      </span>
      <span class="project-bottom-text">剩余可投：{{(item.targetCharge-item.investCharge) | currency(1)}}</span>
    </div>

  </div>
</template>
<style lang="less" scoped>
@import "../../common/less/index.less";
.project-item {
  width: 100%;
  font-size: 24 / @rem;
  padding: 30 / @rem;
  box-sizing: border-box;
  .projtct-item-top {
    text-align: center;
    font-size: 28 / @rem;
    &.active {
      color: #e30920;
    }
    &.over {
      color: #999;
    }
  }
  .projtct-item-top-2 {
    span {
      display: inline-block;
      vertical-align: middle;
      font-size: 28 / @rem;
      color: #999;
      margin-bottom: 30 / @rem;
      &.active {
        color: #e30920;
      }
      &.over {
        color: #999;
      }
    }
    .projtct-item-top-icon {
      width: 100 / @rem;
      height: 36 / @rem;
      background-size: 100% 100%;
      margin-right: 20 / @rem;
      &.new {
        .bg-image("/static/img/Novice");
      }
      &.new-red {
        .bg-image("/static/img/novice2");
      }
      &.dingzhi {
        .bg-image("/static/img/dingzhi");
      }
      &.dingzhi-red {
        .bg-image("/static/img/dingzhi2");
      }
      &.time {
        .bg-image("/static/img/time-grey");
      }
      &.time-red {
        .bg-image("/static/img/time-red");
      }
      &.diya {
        .bg-image("/static/img/pledge-gray");
      }
      &.diya-red {
        .bg-image("/static/img/pledge-red");
      }
    }
  }
  .project-tips {
    font-size: 24 / @rem;
    color: #666;
    line-height: 104 / @rem;
    text-align: center;
  }
  .project-detail {
    display: flex;
    display: -webkit-flex;
    border-bottom: 1px solid #e6e6e6;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 40 / @rem;
    .project-detail-item {
      width: 33.33333%;
      text-align: center;
      &.order {
        order: -1;
      }
      .project-detail-num {
        color: #333;
        font-size: 28 / @rem;
        line-height: 60 / @rem;
        height: 60 / @rem;
        margin-bottom: 20 / @rem;
        span.red {
          color: #e30920;
          b {
            font-size: 60 / @rem;
          }
        }
        span.grey {
          color: #999;
          b {
            font-size: 60 / @rem;
          }
        }
      }
      .project-detail-text {
        font-size: 24 / @rem;
        color: #999;
      }
    }
  }
  .project-bttom {
    padding: 30 / @rem;
    box-sizing: border-box;
    span {
      display: inline-block;
      vertical-align: middle;
    }
    .project-bttom-icon {
      width: 24 / @rem;
      height: 26 / @rem;
      background-size: 24 / @rem 26 / @rem;
      &.icon-grey {
        .bg-image("/static/img/index-money-gray");
      }
      &.icon-red {
        .bg-image("/static/img/index-money");
      }
    }
    .project-bottom-text {
      font-size: 24 / @rem;
      color: #666;
      margin-left: 20 / @rem;
    }
  }
}
</style>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      classMapgrey: [],
      classMapred: []
    };
  },
  props: {
    item: {
      type: Object,
      default() {
        return [];
      }
    },
    position: {
      type: String,
      default: "2"
    }
  },
  computed: {
    ...mapGetters(["touchFlag"])
    // typeName() {
    //   switch (this.item.type) {
    //     case 1:
    //       return 1;
    //       break;
    //     case 2:
    //       return 2;
    //       break;
    //     case 3:
    //       return 3;
    //       break;
    //     case 4:
    //       return 4;
    //       break;
    //     default:
    //       return "";
    //   }
    // }
  },
  mounted() {
    this.classMapgrey = ["new", "dingzhi", "time", "diya"];
    this.classMapred = ["new-red", "dingzhi-red", "time-red", "diya-red"];
  },
  methods: {
    ...mapActions(["touchStart",'touchMove']),
    toPage(val) {
    console.log(this.touchFlag);
      if (this.touchFlag) {
        this.$router.push(val);
      }
    }
  }
};
</script>

