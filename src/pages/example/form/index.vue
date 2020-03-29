<template>
  <demo-page title="Form 表单">
    <demo-block title="基本用法">
      <view class="h-demo-form-content">
        <h-form ref="form1">
          <h-field-group>
            <h-form-item>
              <h-field v-model="form1.username" label="用户名" placeholder="请输入用户名"></h-field>
            </h-form-item>
            <h-field v-model="form1.password" type="password" label="密码" placeholder="请输入密码"></h-field>
          </h-field-group>
          <view class="h-demo-form-content-button">
            <h-button>提交</h-button>
          </view>
        </h-form>
      </view>
    </demo-block>
    <demo-block title="表单校验">
      <view class="h-demo-form-content">
        <h-form ref="form2">
          <h-field-group>
            <h-form-item required="请输入用户名" :value="form2.username">
              <h-field v-model="form2.username" label="用户名" placeholder="请输入用户名"></h-field>
            </h-form-item>
            <h-form-item required="请输入密码" :value="form2.password">
              <h-field v-model="form2.password" type="password" label="密码" placeholder="请输入密码"></h-field>
            </h-form-item>
          </h-field-group>
          <view class="h-demo-form-content-button">
            <h-button @tap="submit('form2')">提交</h-button>
          </view>
        </h-form>
      </view>
    </demo-block>
    <demo-block title="校验规则">
      <view class="h-demo-form-content">
        <h-form ref="form3">
          <h-field-group>
            <h-form-item required="请输入邮箱地址" :value="form3.email" :rules="rules.email">
              <h-field v-model="form3.email" label="邮箱" placeholder="请输入邮箱地址"></h-field>
            </h-form-item>
            <h-form-item :value="age" :rules="rules.age">
              <h-field v-model="form3.age" label="年龄" placeholder="请输入年龄" type="number"></h-field>
            </h-form-item>
          </h-field-group>
          <view class="h-demo-form-content-button">
            <h-button @tap="submit('form3')">提交</h-button>
          </view>
        </h-form>
      </view>
    </demo-block>
    <demo-block title="自定义校验规则">
      <view class="h-demo-form-content">
        <h-form ref="form4">
          <h-field-group>
            <h-form-item required="请输入手机号码" :value="form4.mobile" :rules="[phone]">
              <h-field v-model="form4.mobile" label="手机号码" placeholder="请输入手机号码"></h-field>
            </h-form-item>
            <h-form-item required="请输入身份证号码" :value="form4.idcard" :rules="[IDCard]">
              <h-field v-model="form4.idcard" label="身份证号码" placeholder="请输入身份证号码" type="idcard"></h-field>
            </h-form-item>
          </h-field-group>
          <view class="h-demo-form-content-button">
            <h-button @tap="submit('form4')">提交</h-button>
          </view>
        </h-form>
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
      form1: {
        username: '',
        password: ''
      },
      form2: {
        username: '',
        password: ''
      },
      form3: {
        email: '',
        age: ''
      },
      form4: {
        mobile: '',
        idcard: ''
      },
      rules: {
        age: [
          {
            required: true,
            message: '请输入年龄'
          },
          { type: 'number', message: '年龄必须为数字值' }
        ],
        email: [
          { type: 'email', message: '请输入正确的邮箱地址' }
        ]
      }
    }
  },
  computed: {
    age() {
      const age = parseInt(this.form3.age)
      return isNaN(age) ? this.form3.age : age
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
    submit(form) {
      this.$refs[form].validate()
    }
  }
}
</script>
<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(demo-form) {
  @include e(content) {
    background: $--white;
  }
  @include e(content-button) {
    display: flex;
    justify-content: center;
    padding: 40rpx 0;
  }
}
</style>
