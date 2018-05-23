<template>
    <transition name="fade">
        <div class="tips" v-show="tipsFlag">
            <div class="tips-text">
                {{tipsText}}
            </div>
        </div>
    </transition>

</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["tipsFlag", "tipsText"])
  },
  created() {},
  methods: {
    ...mapActions(["tipsHide"])
  },
  destroyed() {
    window.clearTimeout(clearTips);
  },
  watch: {
    tipsFlag(val) {
      console.log(val);
      if (val) {
        let _this = this;
        if (_this.tipsFlag) {
          var clearTips = setTimeout(() => {
            _this.tipsHide();
          }, 1000);
        }
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import "../common/less/index.less";
.fade-enter-active{
    transition: all 0.5s;
}
.fade-leave-active{
    transition: all 0s;
}
.fade-enter,.fade-leave-to{
    opacity: 0;
}
.tips {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100001;
}
.tips-text {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 20 / @rem;
  font-size: 24 / @rem;
  border-radius: 10 / @rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  transform: translate(-50%, -50%);
}
</style>
