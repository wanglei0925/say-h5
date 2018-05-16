<template>
    <div>
        <!-- <router-link :to="{path:'/index'}">23333</router-link>
        <router-link :to="{path:'/'}">3333</router-link> -->
        <div class="common-header">
            <div class="common-left"></div>
            <div class="common-center">ddd</div>
            <div class="common-right"></div>
        </div>
    </div>

</template>
<style lang="less" scoped>
@import "../../common/less/index.less";
.common-header {
  width: 100%;
  height: 80 / @rem;
  .flex;
  .common-left{
      .bg-image('icon');
      width:15%;
      height:80/@rem;
      background-size:40/@rem 40/@rem;
      background-position:center center;
  }
  .common-center{
      flex:0 0 1;
      width:70%;
      text-align:center;
      font-size:32/@rem;
      color:#333;
      line-height:80/@rem;
  }
  .common-right{
       width:15%;
  }
}
</style>
