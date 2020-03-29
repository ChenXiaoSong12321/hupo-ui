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
export default {
  data() {
    return {
      username1: '',
      username2: '',
      password2: '',
      search: '',
      code: ''
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
