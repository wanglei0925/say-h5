<template>
  <div class="annoce-detail">
    <div class="title">
      {{title}}
    </div>
    <div class="html-detail" v-html="content">
    </div>
  </div>

</template>
<script>
import { articleApi } from "@/api/user-wwl.js";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "",
      content: ""
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    ...mapActions(["headerTitle"]),
    getDetail() {
      articleApi.detail(this.$route.params.id).then(response => {
        if (response.status) {
          this.item = response.data;
          this.headerTitle(response.data.title);
          this.title = response.data.title;
          articleApi
            .content(this.STORAGE_URL + this.item.content)
            .then(_response => {
              console.log(_response);
              this.content = _response;
            });
        }
      });
    }
  }
};
</script>
<style lang="less">
@import "../../common/less/index.less";
.annoce-detail {
  padding-top: 30 / @rem;
  .title {
    font-size: 32 / @rem;
    text-align: center;
    line-height: 60 / @rem;
  }
  .html-detail {
    padding: 30 / @rem;
    p {
      font-size: 28 / @rem!important;
      line-height: 36 / @rem;
      color: #666;
      margin-bottom: 20 / @rem;
    }
    table {
      color: #666;
      margin-bottom: 20 / @rem;
      border-collapse: collapse;
      tr th,
      tr td {
        font-size: 28 / @rem!important;
        line-height: 50/ @rem;
        border: 1px solid #ddd;
      }
    }
  }
}
</style>
