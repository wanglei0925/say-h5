<template>
    <div class="propart-wrapper">

        <div>
            <div class="propart-item" v-for="(item,index) in dataAttrs" :key="index">
                <span v-for="(child,index) in item.split('|')" :key="index">
                    {{child}}
                </span>
            </div>

        </div>
    
    </div>

</template>
<style lang="less" scoped>
@import "../../common/less/index.less";
.propart-wrapper {
  padding: 30 / @rem;
  .propart-item {
    height: 80 / @rem;
    font-size: 24 / @rem;
    color: #666;
    display: flex;
    align-items: center;
    line-height: 30 / @rem;
    .border-bottom;
    span {
     min-width: 120/@rem;
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
      dataAttrs: []
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
        this.dataAttrs = _response.data.proAttr.dataAttrs.split(";");
        this.proData = _response.data.proData;
      });
    }
  },
  components: {
    NoRecord
  }
};
</script>
