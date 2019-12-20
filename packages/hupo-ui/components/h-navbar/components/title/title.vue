<template>
  <view class="h-navbar-title">
    <view class="h-navbar-title-side">
      <h-navbar-loading :show="loading" :type="type"></h-navbar-loading>
    </view>
    <view class="h-navbar-title-text" :class="[`h-navbar-title-text--${type}`]">
      <text>{{title}}</text>
    </view>
    <view class="h-navbar-title-side"></view>
  </view>
</template>

<script>
import hNavbarLoading from '../loading/loading'
export default {
  name: 'h-navbar-title',
  components: {
    hNavbarLoading
  },
  props: {
    title: {
      type: String,
      default: '琥珀亲子'
    },
    loading: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>
<style lang="scss">
@import "./title.scss";
</style>
