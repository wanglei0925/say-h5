<template>
  <div id="app">
     <common-head v-if="$route.meta.h==1"></common-head>
     <transition name="slide-fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import CommonHead from "./components/index/CommonHead.vue";
export default {
  name: 'App',
    components: {
    CommonHead,
  },
}
</script>

<style>
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
