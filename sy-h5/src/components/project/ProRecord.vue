<template>
    <div class="propart-wrapper">
        <div v-if="recordList.length>0">
            <div class="propart-item-title">
                <div>
                    出借人
                </div>
                <div>
                    出借金额
                </div>
                <div>
                    交易时间
                </div>
            </div>
            <div class="propart-item" v-for="(item,index) in recordList" :key="index">
                <span>
                    {{item.userphone}}
                </span>
                <span>
                    {{item.totalCharge}}
                </span>
                <span>
                    {{item.created| format('yyyy-MM-dd HH:mm')}}
                </span>
            </div>
        </div>
        <no-record v-if="recordList.length<0"></no-record>
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
      width: 33.3333%;
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
      width: 33.3333%;
      text-align: center;
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
      recordList: []
    };
  },
  computed: {},
  created() {
    this.getContent();
  },
  methods: {
    ...mapActions(["headerTitle"]),
    getContent() {
      projectApi
        .invest({ pageNo: "1", projectId: this.$route.params.id })
        .then(_response => {
          // this.headerTitle(_response.data.project.title);
          this.recordList = _response.data.list;
        });
    }
  },
  components: {
    NoRecord
  }
};
</script>
