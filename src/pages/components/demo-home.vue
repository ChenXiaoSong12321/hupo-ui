<template>
  <view class="h-demo-home">
    <view class="h-demo-home-title">
      <view class="h-demo-home-image">
        <h-image mode="widthFix" :src="logo" />
      </view>
      <view class="h-demo-home-text">Hupo UI 组件库</view>
    </view>
    <view class="h-demo-home-desc">基于uni-app开发，轻量、可靠的小程序 UI 组件库</view>
    <view v-for="(group, index) in list" :key="index">
      <demo-home-nav :group="group" />
    </view>
  </view>
</template>

<script>
import demoHomeNav from './demo-home-nav.vue'
import list from '../nav.config.js'
export default {
  components: {
    demoHomeNav
  },
  data() {
    return {
      list,
      logo: require('../images/logo.png')
    }
  }
}
</script>

<style lang="scss">
@import '~@hupo/core-sass-bem';
@include b(demo-home) {
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  padding: 46px 20px 20px;
  background: #fff;
  @include e(title) {
    display: flex;
    align-items: center;
    padding-left: 16px;
    font-weight: normal;
    line-height: 1;
    user-select: none;
    margin: 0 0 16px;
    font-size: 32px;
  }
  @include e(desc) {
    padding-left: 16px;
    font-weight: normal;
    line-height: 1;
    user-select: none;
    margin: 0 0 40px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
  }
  @include e(image) {
    width: 32px;
    height: 32px;
    border-radius: 100%;
    border: 1px solid #eee;
  }
  @include e(text) {
    margin-left: 10px;
    font-weight: 500;
  }
}
</style>
