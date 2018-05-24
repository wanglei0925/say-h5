<template>
  <div>ddddd</div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { projectApi } from "@/api/user-wwl";
export default {
  data() {
    return {};
  },
  mounted() {
    this.getDetail();
  },
  computed: {
    ...mapGetters(["changeTitle"])
  },
  methods: {
    ...mapActions(["headerTitle"]),
    getDetail() {
      projectApi.detail(this.$route.params.id).then(response => {
        this.headerTitle(response.data.project.title)
      });
    }
  }
};
</script>
