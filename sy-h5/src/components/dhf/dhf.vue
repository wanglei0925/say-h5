<template>
    <div class="set-wrapepr">
        <div>
            验证 this.$set
        </div>
        <ul class="aaaa">
            <li v-for="(item,index) in setList" :key="index" @touchend.stop="change(index)">
                <span>{{index}}</span>
                <span>{{item.name}}</span>
                <span>{{item.dec}}</span>
                <span>{{item.test}}</span>
            </li>
        </ul>
        <div class="btn" @touchend.stop="add()"> 增加一条数据</div>
<!-- 测试数据改变 -->
        <ul>
            <li v-for="(item,index) in setList222" :key="index">
                <food :food="item"></food>
            </li>
        </ul>
    </div>
</template>
<script>
import Food from "./food.vue";
export default {
  data() {
    return {
      setList: [
        {
          name: "vue",
          dec: "喜欢"
        },
        {
          name: "angular",
          dec: "不喜欢"
        },
        {
          name: "react",
          dec: "学习中"
        }
      ],
       setList222: [
        {
          name: "vue",
          dec: "喜欢"
        },
        {
          name: "angular",
          dec: "不喜欢"
        },
        {
          name: "react",
          dec: "学习中"
        }
      ]
    };
  },
  mounted() {},
  created() {
    console.log(this.setList);
  },
  computed: {
      
  },
  methods: {
    change(index) {
      //   this.setList[index].test = "测试测试";
      // Vue.set()在methods里面可以写成 this.$set()
      this.$set(this.setList[index], "test", "测试测试");
      console.log(this.setList);
    },
    add() {
      this.setList.push({
        name: "html",
        dec: "呀 这是基础呀"
      });
      console.log(this.setList);
    }
  },
  watch:{
setList222() {
console.log(this.setList222)
}
  },
  components: {
    Food
  }
};
</script>
<style lang="less" scoped>
@import "../../common/less/index.less";
.set-wrapepr {
  font-size: 32 / @rem;
  .aaaa {
    margin-top: 60 / @rem;
    line-height: 60 / @rem;
    li {
      width: 100%;
      font-size: 0;
      span {
        display: inline-block;
        font-size: 28 / @rem;
        width: 25%;
        text-align: center;
      }
    }
  }
  .btn {
    width: 90%;
    color: #fff;
    line-height: 88 / @rem;
    text-align: center;
    background: #e30920;
    border-radius: 10 / @rem;
    margin: 20 / @rem auto;
  }
}
</style>

