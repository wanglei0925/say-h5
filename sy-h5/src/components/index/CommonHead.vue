<template>
  <!-- <router-link :to="{path:'/index'}">23333</router-link>
        <router-link :to="{path:'/'}">3333</router-link> -->
  <div class="common-header" ref="commonHeader" :class="{'common-heade-fixed':fixedFlag}">
    <div class="common-left" @click.stop="openFlag()"></div>
    <div class="common-arrow" @click="$router.back(-1)"></div>
    <div class="common-center">{{changeTitle}}</div>
    <div class="common-right"></div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      fixedFlag: false
    };
  },
  computed: {
    ...mapGetters(["changeTitle"])
  },
  methods: {
    ...mapActions(["openFlag"]),
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var heightTop = this.$refs.commonHeader.offsetHeight;
      if (scrollTop > 0) {
        this.fixedFlag = true;
      } else {
        this.fixedFlag = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="less" scoped>
@import "../../common/less/index.less";
.common-heade-fixed {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10001;
}
.common-header {
  width: 100%;
  height: 80 / @rem;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
  background: #fff;
  // box-shadow: 0 0 4 / @rem rgba(0, 0, 0, 0.5);
  .flex;
  .common-left {
    .bg-image("icon");
    width: 10%;
    height: 80 / @rem;
    background-size: 40 / @rem 40 / @rem;
    background-position: center center;
  }
  .common-arrow {
    .bg-image("tab-back");
    width: 10%;
    height: 80 / @rem;
    background-size: 20 / @rem 36 / @rem;
    background-position: center center;
  }
  .common-center {
    flex: 0 0 1;
    width: 60%;
    text-align: center;
    font-size: 32 / @rem;
    color: #333;
    line-height: 80 / @rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .common-right {
    width: 20%;
  }
}
</style>
