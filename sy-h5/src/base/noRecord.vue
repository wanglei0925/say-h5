<template>
    <div class="no-record-wrapper">
        <div class="no-record-icon">
            暂无记录
        </div>
    </div>
</template>
<style lang="less" scoped>
@import "../common/less/index.less";
.no-record-wrapper {
  font-size: 28 / @rem;
  color: #666;
  .no-record-icon {
    margin-top: 240 / @rem;
    padding-top: 152 / @rem;
    .bg-image("/static/img/no-recode");
    background-size: 148 / @rem 122 / @rem;
    background-position: top center;
    text-align: center;
  }
}
</style>

