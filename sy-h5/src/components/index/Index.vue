<template>
  <div class="index">
    <div class="index-banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in bannerList" :key="item.id">
            <img :src="STORAGE_URL+item.picUrl" alt="">
          </div>

        </div>
        <div class="swiper-pagination">
        </div>
      </div>
    </div>
    <div class="index-second">
      <div class="index-second-item">
        <img src="/static/img/index-item1.png" alt="">
        <div class="text">
          新手指引
        </div>
      </div>
      <div class="index-second-item">
        <img src="/static/img/index-item2.png" alt="">
        <div class="text">
          安全保障
        </div>
      </div>
      <div class="index-second-item">
        <img src="/static/img/index-item3.png" alt="">
        <div class="text">
          关于我们
        </div>
      </div>
    </div>
    <line-color></line-color>
    <div class="peoduct-container">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in ProjectList1" :key="item.id">
            <project-item :position="'1'" :item="item"></project-item>
          </div>

        </div>
        <div class="swiper-pagination">
        </div>
      </div>
    </div>
    <line-color></line-color>

    <div class="peoduct-container">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in ProjectList3" :key="item.id">
            <project-item  :item="item"></project-item>
          </div>

        </div>
        <div class="swiper-pagination">
        </div>
      </div>
    </div>
    <line-color></line-color>
    <div class="peoduct-container">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in ProjectList4" :key="item.id">
            <project-item  :item="item" ></project-item>
          </div>

        </div>
        <div class="swiper-pagination">
        </div>
      </div>
    </div>
    <line-color></line-color>
  </div>
</template>
<script>
import Vue from "vue";
import { bannerApi, projectApi } from "@/api/user-wwl";
import "../../../static/css/swiper-4.1.0.min.css";
import Swiper from "../../../static/js/swiper-4.1.0.min.js";
import lineColor from "@/base/Line.vue";
import ProjectItem from "../modal/ProjectItem";
export default {
  data() {
    return {
      bannerList: {},
      ProjectList1: {},
      ProjectList2: {},
      ProjectList3: {},
      ProjectList4: {},
      param1: {
        type: "1",
        pageSize: "1"
      },
      param2: {
        type: "2",
        pageSize: "1"
      },
      param3: {
        type: "3",
        pageSize: "4"
      },
      param4: {
        type: "4",
        pageSize: "3"
      }
    };
  },
  mounted() {},
  created() {
    this.getBannerList();
    // this.getProjectrList1();
    // this.getProjectrList2();
    // this.getProjectrList3();
  },
  methods: {
    getBannerList() {
      bannerApi.list().then(response => {
        if (response.status) {
          this.bannerList = response.data;
          projectApi.list(this.param1).then(response => {
            if (response.status) {
              this.ProjectList1 = response.data;
              projectApi.list(this.param2).then(response => {
                if (response.status) {
                  this.ProjectList1.push(response.data[0]);
                  projectApi.list(this.param3).then(response => {
                    if (response.status) {
                      this.ProjectList3 = response.data;
                      projectApi.list(this.param4).then(response => {
                         this.ProjectList4 = response.data;
                        this.$nextTick(() => {
                          // DOM更新了
                          // swiper重新初始化
                          /* eslint-disable no-new */
                          this.getSwipeDom();
                        });
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    },
    getSwipeDom() {
      new Swiper(".swiper-container", {
        pagination: {
          el: ".swiper-pagination"
        }
      });
    },

  },
  components: {
    lineColor,
    ProjectItem
  }
};
</script>
<style lang="less" scoped>
@import "../../common/less/index.less";
.index-banner {
  width: 100%;
  img {
    width: 100%;
  }
}
.index-second {
  padding: 30 / @rem 0;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 24 / @rem;
  color: #333;
  line-height: 24 / @rem;
  .index-second-item {
    width: 33.3333%;
    display: block;
    img {
      width: 72 / @rem;
      height: 72 / @rem;
      display: block;
      margin: 0 auto 20 / @rem;
    }
    .text {
      text-align: center;
    }
  }
}
</style>
