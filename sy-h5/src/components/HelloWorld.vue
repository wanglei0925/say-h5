<template>
  <div class="hello">
ssss
  </div>
</template>

<script>
import { bannerApi } from "@/api/user-wwl";
// import { API_URL, PAY_URL } from "@/api/request-path";
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  created() {
    this.getBannerList();
  },
  methods: {
    getBannerList() {
      bannerApi.list().then(response => {
        console.log(response);
      });
      // this.axios.get(API_URL+'/urlList/banner').then(response => {
      //   console.log(response)
      // }).catch(err => {
      //   console.log(1);
      // })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
