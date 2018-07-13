<template>

  <div @touchend="closeFlag()">
    <transition name="show-fade">
      <div class="common-left" v-show="navFlag"></div>
    </transition>
    <transition name="slide-fade">
      <div class="common-left-content" v-show="navFlag">
        <!-- <confirm v-if="conflag" ref="confrim" :text="text" @cancel="sureCancle()" @confirm="SureConfirm()"></confirm> -->
        <div class="section1">
          <div class="sec-top1">
            <img src="/static/img/menuavatar.png" alt="">
            <span v-if="loginIn==0">
              <span @touchend.stop="toUrl('/login')">登录</span>/
              <span @touchend.stop="toUrl('/register')">注册</span>
            </span>

            <span v-if="loginIn==1">
              {{userInfo.mobile}}
            </span>
          </div>
          <div class="menu">
            <ul>
              <li>
                <div @touchend.stop="toUrl('/')">
                  <img src="/static/img/menu1.png" alt="">
                  <span>首页</span>
                </div>
              </li>
              <li>
                <div @touchend.stop="toUrl('/search')">
                  <img src="/static/img/menu1.png" alt="">
                  <span>better-scroll</span>
                </div>
              </li>
              <li>
                <div @touchend.stop="toUrl('/dhf')">
                  <img src="/static/img/menu2.png" alt="">
                  <span>都鸿飞</span>
                </div>
              </li>
              <li>
                <div @touchend.stop="toUrl('/borrow')">
                  <img src="/static/img/menu2.png" alt="">
                  <span>我要借款</span>
                </div>
              </li>
              <li>
                <div @touchend.stop="toUrl('/projectlist')">
                  <img src="/static/img/menu3.png" alt="">
                  <span>我要出借</span>
                </div>
              </li>
              <li>
                <div @touchend.stop="toUrl('/user')">
                  <img src="/static/img/menu2.png" alt="">
                  <span>我的账户</span>
                </div>
              </li>
              <li>
                <div @touchend.stop="childShow()">
                  <img src="/static/img/menu2.png" alt="">
                  <span>信息披露</span>
                  <i :class="{'rotate1':rotaflag}"></i>
                </div>
                <div class="info-child" v-show="rotaflag">
                  <div class="info-child-item" @touchend.stop="toUrl('/about')">
                    关于我们
                  </div>
                  <div class="info-child-item" @touchend.stop="toUrl('/company')">
                    平台公告
                  </div>
                  <div class="info-child-item" @touchend.stop="toUrl('/pay')">
                    还款公告
                  </div>
                  <div class="info-child-item" @touchend.stop="toUrl('/kuan')">
                    放款公告
                  </div>
                </div>

              </li>
              <li>
                <a href="tel:400-839-7365">
                  <div>
                    <img src="/static/img/menu5.png" alt="">
                    <span>联系我们</span>
                  </div>
                </a>
              </li>
              <li v-if="loginIn == 1" @touchend.stop="vuexQuit()">
                <div>
                  <div>
                    <img src="/static/img/menu5.png" alt="">
                    <span>退出</span>
                  </div>
                </div>
              </li>

            </ul>
          </div>
          <div class="sec-text">安心理财，收益稳健</div>
        </div>
      </div>
    </transition>

  </div>

</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { loginApi } from "@/api/user-wwl.js";
import Confirm from "@/base/confirm";
export default {
  data() {
    return {
      text: "确定退出嘛？",
      conflag: false,
      rotaflag: false
    };
  },
  computed: {
    ...mapGetters(["navFlag", "loginIn", "quitState", "userInfo"])
  },
  methods: {
    ...mapActions(["closeFlag", "loginout", "confirmToggle"]),
    toUrl(url) {
      this.closeFlag();
      this.$router.push(url);
    },
    childShow() {
      this.rotaflag = !this.rotaflag;
    },
    toExit() {
      // this.conflag = true;
    },
    vuexQuit() {
      this.closeFlag();
      this.confirmToggle(true);
    }
    // SureConfirm() {
    //   loginApi.loginout().then(response => {
    //     console.log(response);
    //     if (response.status) {
    //       this.loginout();
    //     }
    //   });
    // },
    // sureCancle() {
    //   console.log("您点了取消按钮呀");
    // }
  },
  created() {},
  watch: {
    quitState(val) {
      if (val) {
        loginApi.loginout().then(response => {
          console.log(response);
          if (response.status) {
            this.loginout();
          }
        });
        console.log("点击了确定按钮");
      } else {
        console.log("点击了取消按钮");
      }
    },
    navFlag: function(val) {
      if (!val) {
        this.rotaflag = false;
      }
    }
  },
  components: {
    Confirm
  }
};
</script>
<style lang="less" scoped>
@import "../../common/less/index.less";
.slide-fade-enter-active,
.slide-fade-leave-active,
.show-fade-enter-active,
.show-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter,
.slide-fade-leave-active {
  transform: translateX(-100%);
  opacity: 0;
}
.show-fade-enter,
.show-fade-leave-to {
  opacity: 0;
}

.common-left {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  z-index: 10000;
}
.common-left-content {
  position: fixed;
  background: #000;
  width: 520 / @rem;
  height: 100%;
  top: 0;
  left: 0;
  overflow: auto;
  z-index: 11000;
  color: #fff;
  font-size: 32 / @rem;
}
.section1 {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 100 / @rem;
  box-sizing: border-box;
}
.sec-top1 {
  width: 100%;
  img {
    display: inline-block;
    vertical-align: middle;
    width: 88 / @rem;
    height: 88 / @rem;
    margin: 0 30 / @rem;
  }
  span {
    display: inline-block;
    vertical-align: middle;
    font-size: 32 / @rem;
  }
}
.menu {
  width: 100%;
  li {
    min-height: 90 / @rem;
    line-height: 90 / @rem;
    padding-left: 30 / @rem;
    font-size: 0 / @rem;
    color: #ccc;
    a {
      display: block;
      height: 90 / @rem;
    }
    img {
      display: inline-block;
      vertical-align: middle;
      width: 38 / @rem;
      height: 34 / @rem;
      margin: 0 30 / @rem;
    }
    span {
      font-size: 30 / @rem;
      display: inline-block;
      vertical-align: middle;
    }
    div {
      position: relative;
      i {
        position: absolute;
        top: 50%;
        box-sizing: border-box;
        right: 50 / @rem;
        width: 20 / @rem;
        height: 20 / @rem;
        transform: translate(0, -50%) rotate(45deg);
        border: 2px solid #fff;
        border-bottom: none;
        border-left: none;
        transition: all 0.5s;
      }
      .rotate1 {
        margin-top: -10 / @rem;
        transform: rotate(135deg);
      }
    }
  }
}
.sec-text {
  position: absolute;
  bottom: 60 / @rem;
  width: 100%;
  text-align: center;
  font-size: 24 / @rem;
  color: #333;
}
.info-child {
  width: 100%;
  min-height: 80 / @rem;
  .info-child-item {
    height: 60 / @rem;
    line-height: 60 / @rem;
    padding-left: 98 / @rem;
    font-size: 28 / @rem;
    color: #ccc;
  }
}
</style>

