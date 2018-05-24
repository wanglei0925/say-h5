<template>
  <div class="project-wrapper">
user
  </div>
</template>
<style lang="less" scoped>
@import "../../common/less/index.less";
.project-wrapper {
  width: 100%;
  .project-list {
    width: 100%;
  }
}
</style>
<script>
export default {
  data() {
    return {
      param: {
        type: "",
        term: "0~0",
        state: "",
        pageNo: "1",
        pageSize: "10"
      },
      proList: {},
      ProjectList: {},
      scrollData: {
        noFlag: false //暂无更多数据显示
      }
    };
  },
  props: {},
  computed: {},
  mounted() {},
  methods: {
    toPage(val) {
      this.$router.push(val);
    }

    // 刷新
  },
  components: {}
};
</script>

