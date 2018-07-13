<template>
    <div class="food" @touchend.stop="aaa()">
        {{food.name}}
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["food"],
  methods: {
    aaa() {
      this.$set(this.food, "test", "测试测试");
      console.log(this.food);
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../common/less/index.less";
.food {
  font-size: 32 / @rem;
  color: #333;
}
</style>

