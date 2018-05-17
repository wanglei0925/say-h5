<template>

    <div class="login">
        <div class="zcwy-logo"></div>
        <div class="login-form" @submit.prevent="loginForm()" data-vv-scope="r1">
            <div class="login-form-item">
                <img src="/static/img/tel.png" class="form-icon" alt="">
                <input type="text" name="mobile" v-validate="'required|phone'" class="form-input" placeholder="请输入您的手机号">
                <img src="/static/img/close.png" class="form-clear" alt="">
                <p v-show="errors.has('mobile')">1{{ errors.first('mobile') }}</p>
            </div>
            <div class="login-form-item">
                <img src="/static/img/tel.png" class="form-icon" alt="">
                <input type="password" name="password" v-validate="'required|min:6|max:20|password'" class="form-input" placeholder="请输入您的密码">
                <img src="/static/img/close.png" class="form-clear" alt="">
                <p v-show="errors.has('password')">1{{ errors.first('password') }}</p>
            </div>
            <div class="login-form-item">
                <img src="/static/img/tel.png" class="form-icon" alt="">
                <input type="text" name="imgCode" v-validate="'required'" class="form-input" placeholder="请输入您的图形验证码">
                <img src="/static/img/close.png" class="form-yzm" alt="">

                <p v-show="errors.has('imgCode')">1{{ errors.first('imgCode') }}</p>
            </div>
            
            <div class="form-btn" @touchend.stop="loginForm()">
                立即登陆
            </div>
        </div>
        

    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    loginForm() {
      this.$validator.validateAll().then(result => {
        if (result) {
          alert(1);
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../common/less/index.less";
.login {
  width: 100%;
}
.zcwy-logo {
  width: 226 / @rem;
  height: 170 / @rem;
  display: block;
  margin: 108 / @rem auto 60 / @rem;
  .bg-image("/static/img/logo");
}
.login-form {
  max-width: 750 / @rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 30 / @rem;
  box-sizing: border-box;
  .login-form-item {
    width: 100%;
    height: 110 / @rem;
    margin-bottom: 24 / @rem;
    position: relative;
    .flex;
    align-items: center;
    box-sizing: border-box;
    .border-bottom(#ddd);
    p {
      position: absolute;
      bottom: -40 / @rem;
      height: 30 / @rem;
      font-size: 24 / @rem;
      color: #e30920;
      line-height: 30 @rem;
      left: 102 / @rem;
    }
    .form-icon {
      width: 36 / @rem;
      height: 36 / @rem;
      margin: 0 22 / @rem;
    }
    .form-input {
      flex: 1;
      outline: none;
      height: 60 / @rem;
      line-height: 60 / @rem;
      font-size: 24 / @rem;
      color: #333;
      border-left: 1px solid #ddd;
      padding-left: 22 / @rem;
    }
    .form-clear {
      width: 36 / @rem;
      height: 36 / @rem;
    }
    .form-yzm {
      width: 164 / @rem;
      height: 60 / @rem;
    }
  }
}
.form-btn {
  width: 100%;
  height: 88 / @rem;
  text-align: center;
  line-height: 88 / @rem;
  font-size: 30 / @rem;
  border-radius: 6 / @rem;
  background: #e30920;
  color: #fff;
  margin-top: 80 / @rem;
}
</style>

