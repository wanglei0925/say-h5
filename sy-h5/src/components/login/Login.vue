<template>

    <div class="login">
        <div class="zcwy-logo"></div>
        <form class="login-form" @submit.prevent="loginForm('r1')" data-vv-scope="r1" v-if="size==0">
            <div class="login-form-item">
                <img src="/static/img/tel.png" class="form-icon" alt="">
                <input type="text" name="mobile" v-validate="'required|phone'" class="form-input" placeholder="请输入您的手机号" v-model="params.mobile">
                <img src="/static/img/close.png" class="form-clear" alt="" @click="clearVal()">
                <p v-show="errors.has('r1.mobile')">1{{ errors.first('r1.mobile') }}</p>
            </div>
            <div class="login-form-item">
                <img src="/static/img/tel.png" class="form-icon" alt="">
                <input type="password" v-model="params.password" name="password" v-validate="'required|min:6|max:20|password'" class="form-input" placeholder="请输入您的密码">
                <img src="/static/img/close.png" class="form-clear" alt="" @click="clearPass()">
                <p v-show="errors.has('r1.password')">1{{ errors.first('r1.password') }}</p>
            </div>
            <div class="login-form-item">
                <img src="/static/img/tel.png" class="form-icon" alt="">
                <input type="text" name="imgCode" v-validate="'required'" v-model="params.imgCode" class="form-input" placeholder="请输入您的图形验证码">
                <img src="/static/img/close.png" class="form-yzm" alt="">

                <p v-show="errors.has('r1.imgCode')">1{{ errors.first('r1.imgCode') }}</p>
            </div>

            <div class="form-btn" @touchend.stop="loginForm('r1')">
                立即登陆
            </div>
        </form>

        <form class="login-form" @submit.prevent="loginForm('r2')" data-vv-scope="r2" v-if="size==1">
            <div class="login-form-item">
                <img src="/static/img/tel.png" class="form-icon" alt="">
                <input type="text" name="mobile" v-validate="'required|phone'" class="form-input" placeholder="请输入您的手机验证码">
                <input class="butt" type="button" value="获取验证码" @touchend.stop="sedmsg()">
                <p v-show="errors.has('r2.mobile')">1{{ errors.first('r2.mobile') }}</p>
            </div>
            <div class="form-btn" @touchend.stop="loginForm('r2')">
                立即登陆
            </div>

        </form>

    </div>
</template>
<script>
export default {
  data() {
    return {
      params: {
        mobile: "",
        password: "",
        imgCode: ""
      },
      size: 0
    };
  },
  created() {},
  methods: {
    loginForm(val) {
      this.$validator.validateAll(val).then(result => {
        console.log(result);
        if (result) {
          this.size++;
        }
        console.log(this.size);
      });
    },
    sedmsg() {
      this.$validator.validateAll("r1").then(result => {
        if (result) {
          console.log("sucess");
        }
      });
    },
    clearVal() {
      this.params.mobile = "";
    },
    clearPass() {
      this.params.password = "";
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../common/less/index.less";
.butt {
  width: 120 / @rem;
  font-size: 24 / @rem;
  line-height: 30 / @rem;
  text-align: center;
}
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

