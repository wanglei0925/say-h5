<template>
    <div class="bg-wrapper">

        <div class="test-nav">
            <div :class="{'current':getIndex===0}" @touchend.stop="getScroll(0)">
                111
            </div>
            <div :class="{'current':getIndex===1}" @touchend.stop="getScroll(1)">
                222
            </div>
            <div :class="{'current':getIndex===2}" @touchend.stop="getScroll(2)">
                333
            </div>
        </div>

        <div class="nav-list" ref="navWrapper">
            <div class="nav-item"></div>
            <div class="nav-item"></div>
            <div class="nav-item"></div>
        </div>

        <input type="checkbox" name="aaa" id="" v-model="show">
        <div class="flip-container">
            <transition name="fade">
                <div class="flipper" v-show="show">
                    前面内容
                </div>
            </transition>
            <div style="background:pink;">
                都鸿飞大智障
            </div>
        </div>

        <div class="slide-wrapper">
            <div class="slide-item" v-for="(item,index) in slideList" :key="index">
                <h1 @touchend.stop="changeFlag(index)">{{item.title}}</h1>
                <div class="item" :style="{height:flag==index?hei+'px':0}">
                    <div class="detail-wrapper">
                        {{item.detail}}
                    </div>
                </div>
            </div>

        </div>
        <!-- 翻牌效果的
 -->

        <input type="checkbox" name="aaa" id="" v-model="flipFlag">
        <div class="wrap">
            <div class="card" :class="{'flipHover':flipFlag}">
                <div class="card-face">
                    <img src="/static/img/bg.png">
                </div>
                <div class="card-back">
                    <img src="/static/img/1.png">
                </div>
            </div>
        </div>

        <!-- 翻牌效果结束位置 -->

    </div>
</template>
<style lang="less" scoped>
@import "../../common/less/index.less";
.bg-wrapper {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
// 滚动的css
.test-nav {
  position: fixed;
  top: 140 / @rem;
  left: 0;
  z-index: 10;
  width: 120 / @rem;
  height: 400 / @rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 80 / @rem;
  font-size: 28 / @rem;
  div {
    flex: 1;
    text-align: center;
    color: #fff;
    background: #e30920;
  }
}
.nav-list div:nth-child(1) {
  width: 100%;
  height: 400 / @rem;
  background: pink;
}
.nav-list div:nth-child(2) {
  width: 100%;
  height: 400 / @rem;
  background: paleturquoise;
}
.nav-list div:nth-child(3) {
  width: 100%;
  height: 400 / @rem;
  background: purple;
}
.current {
  color: #333 !important;
}
// 滚动的css

// 翻牌效果
.clearfix {
  *zoom: 1;
}
.clearfix:after {
  display: table;
  content: "";
  clear: both;
}

.card {
  position: relative;
  margin-left: 20px;
  margin-top: 20px;
  width: 270px;
  height: 376px;
  -webkit-perspective: 600px;
  -moz-perspective: 600px;
  -ms-perspective: 600px;
  perspective: 600px;
}

.card .card-face,
.card .card-back {
  position: absolute;
  left: 0;
  top: 0;
  -webkit-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-transform-style: perspective-3d;
  -moz-transform-style: perspective-3d;
  -ms-transform-style: perspective-3d;
  transform-style: perspective-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden; //隐藏被旋转的 div 元素的背面：
}

.card .card-face {
  z-index: 2;
}

.card .card-back {
  z-index: 1;
  -webkit-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.flipHover .card-face {
  z-index: 1;
  -webkit-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.flipHover .card-back {
  z-index: 2;
  -webkit-transform: rotateY(360deg);
  -ms-transform: rotateY(360deg);
  -o-transform: rotateY(360deg);
  transform: rotateY(360deg);
}
// 翻牌效果css结束位置

// 手风琴效果css

.slide-wrapper {
  padding: 20 / @rem;
  box-sizing: border-box;
}
.slide-item {
  overflow: hidden;
  margin-bottom: 10 / @rem;
  background: #fff;
  padding: 0 / @rem 10 / @rem;
  border-radius: 10 / @rem;
}
.slide-wrapper h1 {
  font-size: 32 / @rem;
  color: #333;
  padding: 20 / @rem 0 / @rem;
}
.detail-wrapper {
  padding: 20 / @rem 0;
  font-size: 28 / @rem;
  line-height: 36 / @rem;
  color: #333;
}
.item {
  transition: height 0.5s ease-in-out;
}

// 手风琴效果css

input {
  width: 60 / @rem;
  height: 60 / @rem;
}
.flip-container {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  font-size: 28 / @rem;
  line-height: 30 / @rem;
}
.flipper {
  width: 100%;
  height: 480px;
  color: #fff;
  backface-visibility: hidden;
  background: linear-gradient(#333, #fff);
  transform-style: preserve-3d;
  position: relative;
  transform: rotateY(0deg);
}
.fade-enter-active {
  animation: bounce-in 0.5s ease-in-out;
}
.fade-leave-active {
  animation: bounce-out 0.4s linear reverse;
}
@keyframes bounce-in {
  0% {
    transform: perspective(1000) rotateY(40deg);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: perspective(1000) rotateY(0deg);
  }
}
@keyframes bounce-out {
  0% {
    transform: perspective(1000) rotateY(-40deg);
    opacity: 0;
  }
  100% {
    transform: perspective(1000) rotateY(0deg);

    opacity: 1;
  }
}
</style>

<script>
export default {
  data() {
    return {
      show: true,
      flipFlag: true,
      flag: -1,
      hei: 0,
      slideList: [
        {
          title: "关于成长",
          detail:
            "我希望所有的姑娘们不要被自己的年龄束缚，今天就是你生命里最年轻的一天。"
        },
        {
          title: "关于物质",
          detail:
            "25岁之前可以尽情恋爱、跌倒、尝试、挥霍、任性，各种的朋友越多越好。25到30岁要慢慢学会孤独，人不会在狂欢里变得强大，太多拥抱只会让你依赖温暖。不必遗憾，等你成为了更好的人，并且拥有了更为健壮的内心，30岁以后，更好的朋友会找到你，与你并肩前行，从此便不再孤独。"
        },
        {
          title: "关于美貌",
          detail:
            "大学毕业，年纪小，特别不理解姐姐阿姨们为什么要买几万块的包包，后来有个姐姐告诉我，等你买的时候你就知道了。后来我真的懂了，不是说贵的一定是好的，但是贵有贵的道理。因为很多人所谓的值不值得完全是因为她们没有体验过，只有体验过你才有资格说值不值得的问题。真的拥有，才能放下。"
        },
        {
          title: "关于忍让",
          detail:
            "我特别佩服那些会买东西的姑娘，因为她们很清楚什么需要什么不需要，我听过最好的一句话是：如果你对要不要花钱买这个东西犹豫不决的时候，你就想想要不要成为这样的人，买东西看的是眼界，眼界能帮你成为什么样的人。"
        },
        {
          title: "关于自我",
          detail:
            "当你处在层次越低的地方，你的时间价值就越小，一个小时都在争论一块钱的事，你这一小时就是值这一块，一下午都在讨论谁谁谁又出轨了，你的一下午也就值这点绯闻。"
        }
      ],
      scrollFlag: true,
      scrollMouse: true, //判断是否滚动滚轮
      scrollY: 0,
      times: 0,
      stepLength: 0,
      ListHeight: []
    };
  },
  mounted() {
    this.$nextTick(() => {
      this._calculateHeight();
      window.addEventListener("scroll", this.handleScroll);
    });
  },
  computed: {
    getIndex() {
      for (let i = 0; i < this.ListHeight.length; i++) {
        let height1 = this.ListHeight[i];
        let height2 = this.ListHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        } else if (this.scrollY > this.ListHeight[this.ListHeight.length - 1]) {
          return 0;
        }
      }
      return 0;
    }
  },
  methods: {
    changeFlag(index) {
      if (this.flag == index) {
        this.flag = -1;
        this.hei = 0;
      } else {
        this.flag = index;
        let obj = document.getElementsByClassName("item");
        this.hei = obj[index].getElementsByClassName(
          "detail-wrapper"
        )[0].clientHeight;
      }
    },
    getScroll(val) {
      if (!this.scrollFlag) {
        return;
      }
      this.scrollMouse = true;
      this.scrollFlag = false;
      this.stepLength = Math.abs(this.scrollY - this.ListHeight[val]) / 25;
      console.log(this.stepLength);
      this.times = setInterval(() => {
        this.scrollMouse = true;
        let scrollsetY = this.scrollY;
        if (scrollsetY - this.ListHeight[val] > this.stepLength) {
          scrollsetY -= this.stepLength;
        } else if (this.ListHeight[val] - scrollsetY > this.stepLength) {
          scrollsetY += this.stepLength;
        }
        if (Math.abs(scrollsetY - this.ListHeight[val]) <= this.stepLength) {
          scrollsetY = this.ListHeight[val];
          this.scrollFlag = true;
          clearInterval(this.times);
        }
        document.documentElement.scrollTop = document.body.scrollTop = scrollsetY;
      }, 20);
    },
    _calculateHeight() {
      var navList = this.$refs.navWrapper.getElementsByClassName("nav-item");
      let height = 0;
      //    this.$refs.navWrapper.getElementsByClassName("nav-item")[0]
      //     .offsetTop;
      this.ListHeight.push(height);
      for (let i = 0; i < navList.length; i++) {
        let item = navList[i];
        height += item.clientHeight;
        this.ListHeight.push(height);
      }
      console.log(this.ListHeight);
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrollY = scrollTop;
      if (!this.scrollMouse) {
           this.scrollFlag = true;
        clearInterval(this.times);
      }
      this.scrollMouse = false;
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    clearInterval(this.times);
  }
};
</script>
