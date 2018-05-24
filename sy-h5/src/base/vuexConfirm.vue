<template>
  <transition name="confirm-fade">
    <div class="confirm" v-show="confirmFlag" @click.stop>
      <div class="confirm-wrapper">
        <div class="confirm-content">
          <p class="text">确定此操作嘛？</p>
          <div class="operate">
            <div @click="cancel" class="operate-btn left">取消</div>
            <div @click="confirm" class="operate-btn">确定</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<style scoped lang="less">
@import "../common/less/index.less";
.confirm {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10001;
  display: flex;
  align-items: center;
  justify-content: center;
}
.confirm-wrapper{
  padding: 40/@rem 20/@rem;
  background: #fff;
  font-size: 24/@rem;
  border-radius: 10/@rem;
}
.confirm-content{
  .text{
    text-align: center;
    font-size: 24/@rem;
    margin-bottom: 30/@rem;
    line-height: 40/@rem;
    color: #333;
  }
}
.operate{
  display: table;
  margin: 0 auto;
  div{
    display: inline-block;
    width: 100/@rem;
    line-height: 40/@rem;
    text-align: center;
    margin: 20/@rem 20/@rem;
    background: #e30920;
    padding: 10/@rem;
    border-radius: 4/@rem;
    color: #fff;
    border: none;

  }
}
</style>
<script type="text/ecmascript-6">
import {mapGetters,mapActions} from 'vuex';
export default {
  data() {
    return {
      showFlag:true
    };
  },
  computed:{
...mapGetters(['confirmFlag'])
  },
  methods: {
      ...mapActions(['confirmToggle','quitShow','quitHide']),
    cancel() {
      this.quitHide();
    },
    confirm() {
     this.quitShow();
    }
  }
};
</script>

