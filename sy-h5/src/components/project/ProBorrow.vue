<template>
    <div class="propart-wrapper">
        
        <div v-if="partList.length>0">
        <div class="propart-item" v-for="(item,index) in partList" :key="index">
            <span v-for="(child,index) in item.split('|')" :key="index">
                {{child}}
            </span>
        </div>

        </div>
          <no-record v-if="partList.length<0"></no-record>
    </div>

</template>
<style lang="less" scoped>
@import "../../common/less/index.less";
.propart-wrapper {
  padding: 30 / @rem;
  .propart-item-title {
    height: 80 / @rem;
    font-size: 24 / @rem;
    color: #333;
    display: flex;
    align-items: center;
    line-height: 30 / @rem;
    background: #f5f7f9;
    div {
      min-width: 100/@rem;
      text-align: center;
    }
  }
  .propart-item {
    height: 80 / @rem;
    font-size: 24 / @rem;
    color: #666;
    display: flex;
    align-items: center;
    line-height: 30 / @rem;
    .border-bottom;
    span {
     min-width:100/@rem;
      text-align: left;
    }
  }
}
</style>

<script>
import { projectApi } from "@/api/user-wwl.js";
import { mapActions } from "vuex";
import NoRecord from "@/base/noRecord";
export default {
  data() {
    return {
      partList: []
    };
  },
  computed: {},
  created() {
    this.getContent();
  },
  methods: {
    ...mapActions(["headerTitle"]),
    getContent() {
      projectApi.detail(this.$route.params.id).then(_response => {
        // this.headerTitle(_response.data.project.title);
        this.partList = _response.data.proAttr.attrs.split(";");
      });
    }
  },
  components: {
      NoRecord
  }
};
</script>
