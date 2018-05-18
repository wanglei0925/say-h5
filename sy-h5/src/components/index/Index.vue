<template>
    <div class="index">
        <div class="index-banner">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in bannerList" :key="item.id">
                        <img :src="STORAGE_URL+item.picUrl" alt="">
                    </div>
                    <div class="swiper-pagination">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from "vue";
import { bannerApi } from "@/api/user-wwl";
import "../../../static/css/swiper-4.1.0.min.css";
import Swiper from "../../../static/js/swiper-4.1.0.min.js";

export default {
  data() {
    return {
      bannerList: {}
    };
  },
  mounted() {},
  created() {
    this.getBannerList();
  },
  methods: {
    getBannerList() {
      bannerApi.list().then(response => {
        if (response.status) {
          this.bannerList = response.data;
          this.$nextTick(() => {
            // DOM更新了
            // swiper重新初始化
            /* eslint-disable no-new */
            new Swiper(".swiper-container", {
              pagination: {
                el: ".swiper-pagination"
              }
            });
          });
        }
      });
    }
  },
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
</style>
