<template>
  <demo-page title="Field 输入框">
    <h-form
      ref="form"
      style="box-shadow: 0rpx 0rpx 5rpx 0rpx rgba(0,0,0, .1);margin: 20px 5px;display: block;"
    >
      <h-field-group>
        <h-form-item required="请输入您的真实姓名" :value="form.name">
          <h-field v-model="form.name" label="姓名" placeholder="请输入您的真实姓名" :maxlength="20"></h-field>
        </h-form-item>
        <h-form-item required="请输入您的身份证号" :rules="[IDCard]" :value="form.id_card">
          <h-field
            v-model="form.id_card"
            label="身份证"
            type="idcard"
            placeholder="请输入您的身份证号"
            :maxlength="18"
          ></h-field>
        </h-form-item>
        <h-form-item required="请输入您的身份证号" :rules="[phone]" :value="form.mobile">
          <h-field
            v-model="form.mobile"
            label="电话"
            type="number"
            placeholder="请输入电话号码"
            :maxlength="11"
          ></h-field>
        </h-form-item>
      </h-field-group>
    </h-form>
    <h-button @onclick="submit">提交</h-button>
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
        name: '',
        id_card: '',
        mobile: ''
      }
    }
  },
  mounted() {
    console.log(this)
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
@include b(demo-transition) {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @include e(item) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: $--primary-color-CM1;
  }
  @include e(button) {
    margin-bottom: 20rpx;
  }
}
</style>
