<template>

    <div @click.stop="closeFlag()">
        <transition name="show-fade">
            <div class="common-left" v-show="navFlag"></div>
        </transition>
        <transition name="slide-fade">
            <div class="common-left-content" v-show="navFlag">
                <div class="section1">
                    <div class="sec-top1">
                        <img src="/static/img/menuavatar.png" alt="" @touchend.stop.self="toUrl('/login')">
                        <span @touchend.stop.self="toUrl('/login')">登录</span>/
                        <span @touchend="toUrl('/register')">注册</span>
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
                                <a href="tel:400-839-7365">
                                    <div>
                                        <img src="/static/img/menu5.png" alt="">
                                        <span>联系我们</span>
                                    </div>
                                </a>
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
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["navFlag"])
  },
  methods: {
    ...mapActions(["closeFlag"]),
    toUrl(url) {
        this.$router.push(url);
    }
  },
  created() {}
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
.section1{
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 100/@rem;
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
    height: 90 / @rem;
    line-height: 90 / @rem;
    padding-left: 30 / @rem;
    font-size: 30 / @rem;
    color: #ccc;
    img{
    display: inline-block;
    vertical-align: middle;
    width: 38 / @rem;
    height: 34 / @rem;
    margin: 0 30 / @rem;
    }
    span{
          display: inline-block;
    vertical-align: middle;
    }
  }
}
.sec-text{
    position: absolute;
    bottom: 60/@rem;
    width: 100%;
    text-align: center;
    font-size: 24/@rem;
    color: #333;
}
</style>

