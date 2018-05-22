<template>
    <div>ddddd</div>
</template>
<script>
import { projectApi } from "@/api/user-wwl";
export default {
  data() {
    return {};
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      projectApi.detail(this.$route.params.id).then(response => {
      });
    }
  }
};
</script>
