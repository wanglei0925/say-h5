<template>
    <div class="title-wrapper">
        <i></i>
        <span class="mainTitle">
            {{mainTitle}}
        </span>
        <span class="smallTitle">
            {{smallTitle}}
        </span>
    </div>
</template>
<style lang="less" scoped>
@import "../common/less/index.less";
.title-wrapper {
  padding: 20 / @rem 0;
  font-size: 0;

  i,
  span {
    display: inline-block;
    vertical-align: middle;
    
  }
  i{
      height: 30/@rem;
      width: 6/@rem;
      background: #e30920;
  }
  .mainTitle{
    font-size: 30 / @rem;
    color: #333;
    margin: 0 20/@rem;
      line-height: 30/@rem;
  }
  .smallTitle{
      font-size: 24/@rem;
      color: #eaedf4;
        line-height: 30/@rem;
        margin-top: 10/@rem;
  }
}
</style>
<script>
export default {
  data() {
    return {};
  },
  props: ["mainTitle", "smallTitle"]
};
</script>
