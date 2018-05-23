<template>
  <div id="app">
    <tips></tips>
     <common-head v-if="$route.meta.h==1"></common-head>
     <common-left></common-left>   
     <transition name="slide-fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import CommonHead from "./components/index/CommonHead.vue";
import CommonLeft from "./components/modal/CommonLeft.vue";
import Tips from "./base/tips.vue";
export default {
  name: 'App',
    components: {
    CommonHead,
    CommonLeft,
    Tips
  },
}
</script>

<style lang="less" scoped>
@import "./common/less/index.less";
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
