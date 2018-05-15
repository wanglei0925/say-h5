import VeeValidate, { Validator } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN';//引入中文文件

Validator.localize("zh_CN", zh)

const config = {
  locale: 'zh_CN',
  dictionary: {
    zh_CN: {
      messages: {
        email: () => '请输入正确的邮箱格式',
        required: (field) => "请填写您的" + field
      },
      attributes: {
        email: '邮箱',
        password: '密码',
        name: '账号',
        mobile: '手机号',
        imgCode: '验证码',
        mobileCode: '短信验证码',
        realName: '真实姓名',
        idCard: '身份证',
        oldpass: '原始密码',
        newpass: '新密码',
        confirmpass: '新密码',
      }
    }
  }
};

Validator.extend('phone', {
  getMessage: (field, args) => {
    return '请输入正确的手机号码'
  },
  validate: (value, args) => {
    return /^1[3456789]\d{9}$/.test(value)
  }
});

Validator.extend('password', {
  getMessage: (field, args) => {
    return '密码必须以字母开头，只能包含字母、字符、数字和下划线'
  },
  validate: (value, args) => {
    return /^[a-zA-Z]\w{5,20}$/.test(value)
  }
});

Validator.extend('realName', {
  getMessage: (field, args) => {
    return '请输入正确的真实姓名'
  },
  validate: (value, args) => {
    return /[\u4E00-\u9FA5]{2,4}/.test(value)
  }
});

Validator.extend('idCard', {
  getMessage: (field, args) => {
    return '请输入正确的身份证号码'
  },
  validate: (value, args) => {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/.test(value)
  }
});
Validator.extend('money', {
  getMessage: (field, args) => {
    return '请输入正确的金额'
  },
  validate: (value, args) => {
    return /^[0-9]+([.]{1}[0-9]{1,2})?$/.test(value)
  }
});

export { VeeValidate, config }