<template>
  <div class="project-datail-wrapper">
    <div class="projext-top">
      <div class="projext-rate">
        <span class="span1">{{project.rate}}</span>
        <span class="span2">%</span>
      </div>
      <div class="project-rate-title">
        年化收益率
      </div>
      <div class="project-small-detail">
        <div class="project-small-detail-item">
          <div class="project-small-num">
            {{project.deadline}}天
          </div>
          <div class="project-small-text">
            锁定期限
          </div>
        </div>
        <div class="project-small-detail-item border-lr">
          <div class="project-small-num">
            {{project.targetCharge/1000000}}万元
          </div>
          <div class="project-small-text">
            项目金额
          </div>
        </div>
        <div class="project-small-detail-item">
          <div class="project-small-num">
            {{project.targetCharge-project.investCharge | currency(1)}}元
          </div>
          <div class="project-small-text">
            剩余可投
          </div>
        </div>
      </div>
      <div class="p-d-mj">
        <span>{{project.interestType | interestTypeName}}</span>
        <span>{{project.repayType | repayTypeName}}</span>
        <span>募集期：{{(project.endTime-project.startTime)/864000 | currency(1)}}天</span>
      </div>
      <line-color></line-color>
    </div>
    <div class="p-d-line">
      <span class="line on"></span>
      <span class="round on"></span>
      <span class="line on"></span>
      <span class="line" :class="{'on':interestTime||project.interestType=='2'}"></span>
      <span class="round" :class="{'on':interestTime||project.interestType=='2'}"></span>
      <span class="line" :class="{'on':interestTime||project.interestType=='2'}"></span>
      <span class="line" :class="{'on':capitalTime||project.interestType=='2'}"></span>
      <span class="round" :class="{'on':capitalTime||project.interestType=='2'}"></span>
      <span class="line" :class="{'on':capitalTime||project.interestType=='2'}"></span>
    </div>
    <div class="p-d-text">
      <div class="p-d-text-item">
        <span>发标日期</span>
        <p>{{project.startTime | format('yyyy-MM-dd')}}</p>
      </div>
      <div class="p-d-text-item">
        <span>开始计息</span>
        <template v-if="project.interestType=='1'">
          <p v-if="!interestTime"><img :src="'/static/img/invest-step@2x.png'" alt=""></p>
          <p v-if="interestTime">{{interestTime | format('yyyy-MM-dd')}}</p>
        </template>
      </div>
      <div class="p-d-text-item">
        <span>资金到账</span>
        <template v-if="project.interestType=='1'">
          <p v-if="!capitalTime"><img :src="'/static/img/invest-step@2x.png'" alt=""></p>
          <p v-if="capitalTime">{{capitalTime | format('yyyy-MM-dd')}}</p>
        </template>
      </div>
    </div>
    <line-color></line-color>
    <div class="p-d-option" v-if="project.type==1||project.type==3">
      <div class="p-d-option-item p-d-option-icon1" @touchend="toPage({name:'prointro',params:{id:proDetail.content}})">
        项目详情
        <i class="p-d-option-item-more"></i>
      </div>
      <div class="p-d-option-item p-d-option-icon2" @touchend="toPage({name:'propart',params:{id:project.id}})">
        标的组成
        <i class="p-d-option-item-more"></i>
      </div>
      <div class="p-d-option-item p-d-option-icon3" @touchend="toPage({name:'prorecord', params: { id: project.id }})">
        投资记录
        <i class="p-d-option-item-more"></i>
      </div>
    </div>

    <div class="p-d-option" v-if="project.type==2||project.type==4">
      <div class="p-d-option-item p-d-option-icon1" @touchend="toPage({name:'proborrow', params: { id: project.id }})">
        借款人信息
        <i class="p-d-option-item-more"></i>
      </div>
      <div class="p-d-option-item p-d-option-icon2" @touchend="toPage({name:'prodata', params: { id: project.id }})">
        相关资料
        <i class="p-d-option-item-more"></i>
      </div>
      <div class="p-d-option-item p-d-option-icon3" @touchend="toPage({name:'prorecord', params: { id: project.id }})">
        投资记录
        <i class="p-d-option-item-more"></i>
      </div>
    </div>

  </div>
</template>
<style lang="less" scoped>
@import "../../common/less/index.less";
.project-datail-wrapper {
  .projext-rate {
    font-size: 0 / @rem;
    text-align: center;
    margin: 40 / @rem auto 10 / @rem;
    color: #e30920;
    .span1 {
      font-size: 60 / @rem;
    }
    .span2 {
      font-size: 24 / @rem;
    }
  }
  .project-rate-title {
    font-size: 24 / @rem;
    color: #999;
    margin-bottom: 40 / @rem;
    text-align: center;
  }
  .project-small-detail {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 30 / @rem;
    .project-small-detail-item {
      width: 33.333333%;
      text-align: center;
      padding: 10 / @rem 0;
      &.border-lr {
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
      }
      .project-small-num {
        font-size: 30 / @rem;
        color: #333;
        text-shadow: 0 0 2 / @rem #333;
        margin-bottom: 20 / @rem;
      }
      .project-small-text {
        color: #999;
        font-size: 24 / @rem;
      }
    }
  }
  .p-d-mj {
    display: flex;
    flex-wrap: wrap;
    padding: 0 30 / @rem;
    margin-bottom: 30 / @rem;
    span {
      font-size: 24 / @rem;
      line-height: 34 / @rem;
      color: #e8535c;
      padding: 0 10 / @rem;
      border: 1px solid #e6e6e6;
      margin-right: 30 / @rem;
      margin-bottom: 20 / @rem;
      display: block;
      background: #fce6e8;
      border-radius: 4 / @rem;
    }
  }
  .p-d-line {
    padding: 30 / @rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .on {
      background: #e30920 !important;
    }
    .line {
      flex: 1;
      height: 2 / @rem;
      background: #ccc;
    }
    .line2 {
      flex: 2;
      height: 2 / @rem;
      background: #ccc;
    }
    .round {
      width: 18 / @rem;
      height: 18 / @rem;
      border-radius: 50%;
      background: #ddd;
      margin: 0 10 / @rem;
    }
  }
  .p-d-text {
    padding: 0 30 / @rem 30 / @rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .p-d-text-item {
      text-align: center;
      width: 33.3333%;
      text-align: center;
      font-size: 24 / @rem;
      color: #999;
      line-height: 30 / @rem;
      p {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50 / @rem;
        img {
          width: 22 / @rem;
          height: 22 / @rem;
        }
      }
    }
  }
  .p-d-option {
    .p-d-option-item {
      height: 110 / @rem;
      .border-bottom;
      margin-left: 30 / @rem;
      padding-left: 50 / @rem;
      font-size: 28 / @rem;
      color: #666;
      line-height: 110 / @rem;
      position: relative;
    }
    .p-d-option-icon1 {
      .bg-image("/static/img/invest_1");
      background-size: 28 / @rem 28 / @rem;
      background-position: left center;
    }
    .p-d-option-icon2 {
      .bg-image("/static/img/invest_2");
      background-size: 28 / @rem 28 / @rem;
      background-position: left center;
    }
    .p-d-option-icon3 {
      .bg-image("/static/img/invest_3");
      background-size: 28 / @rem 28 / @rem;
      background-position: left center;
    }
    .p-d-option-item-more {
      position: absolute;
      top: 0;
      right: 30 / @rem;
      width: 16 / @rem;
      height: 110 / @rem;
      .bg-image("/static/img/A_right");
      background-size: 16 / @rem 28 / @rem;
      background-position: right center;
    }
  }
}
</style>

<script>
import { mapActions, mapGetters } from "vuex";
import { projectApi } from "@/api/user-wwl";
import LineColor from "@/base/Line.vue";
export default {
  data() {
    return {
      proDetail: {},
      proFlow: [],
      project: {},
      interestTime: "",
      capitalTime: ""
    };
  },
  mounted() {
    this.getDetail();
  },
  computed: {
    ...mapGetters(["changeTitle", "userInfo", "loginIn"])
  },
  methods: {
    ...mapActions(["headerTitle"]),
    getDetail() {
      projectApi.detail(this.$route.params.id).then(response => {
        this.proDetail = response.data.proDetail;
        this.proFlow = response.data.proFlow;
        this.project = response.data.project;
        this.headerTitle(response.data.project.title);
        if (this.proFlow.length > 0) {
          this.proFlow.forEach(element => {
            if (element.type == 2) {
              this.interestTime = element.time;
              this.capitalTime =
                this.interestTime + this.project.deadline * 24 * 3600 * 1000;
            }
          });
        }
      });
    },
    toPage(val) {
      this.$router.push(val);
    }
  },
  components: {
    LineColor
  }
};
</script>
