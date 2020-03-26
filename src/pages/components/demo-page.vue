<template>
  <h-page :title="title" background="BgC2" fixed>
    <slot></slot>
    <view class="h-demo-page-bottom"></view>
  </h-page>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(demo-page) {
  @include e(bottom) {
    height: 70rpx;
  }
}
</style>
