<template>
  <demo-page title="Field 输入框">
    <demo-block title="基本用法">
      <view class="h-demo-field-item">
        <h-field v-model="username1" placeholder="请输入用户名"></h-field>
      </view>
    </demo-block>
    <demo-block title="自定义类型">
      <view class="h-demo-field-item">
        <h-field-group>
          <h-field v-model="username2" label="用户名" placeholder="请输入用户名"></h-field>
          <h-field v-model="password2" type="password" label="密码" placeholder="请输入密码"></h-field>
        </h-field-group>
      </view>
    </demo-block>
    <demo-block title="插入内容">
      <view class="h-demo-field-item">
        <h-field-group>
          <h-field v-model="search" placeholder="请输入搜索关键词">
            <h-icon name="search" slot="prepend" style="margin-right: 20rpx;"></h-icon>
          </h-field>
          <h-field v-model="code" label="验证码" placeholder="请输入验证码">
            <h-button size="mediumsmall" slot="append">获取验证码</h-button>
          </h-field>
        </h-field-group>
      </view>
    </demo-block>
  </demo-page>
</template>

<script>
/**
 * 电话号码
 * @param {string} phone
 * @returns {Boolean}
 */
function validPhone(phone) {
  var phoneReg = /^[1][3-9][0-9]{9}$/
  return phoneReg.test(phone)
}

/**
 * 身份证校验
 * @param {number} idcard 身份证号
 * @returns {Boolean}
 */
function validIDCard(idcard) {
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return reg.test(idcard)
}
export default {
  data() {
    return {
      form: {
        username1: '',
        username2: '',
        password2: '',
        search: '',
        code: ''
      }
    }
  },
  methods: {
    IDCard(rule, value, callback) {
      if (value && !validIDCard(value)) {
        callback(new Error('请填写正确的身份证号'))
      } else {
        callback()
      }
    },
    phone(rule, value, callback) {
      if (value && !validPhone(value)) {
        callback(new Error('请填写正确的手机号'))
      } else {
        callback()
      }
    },
    submit() {
      this.$refs.form.validate()
    }
  }
}
</script>
<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(demo-field) {
  @include e(item) {
    background: $--white;
  }
}
</style>
