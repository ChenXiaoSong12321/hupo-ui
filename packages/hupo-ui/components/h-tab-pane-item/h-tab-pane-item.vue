<template>
  <view class="h-pane-item">
    <slot></slot>
  </view>
</template>
<script>
export default {
  name: 'h-tab-pane-item'
}
</script>
<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(pane-item) {
  width: 750rpx;
}
</style>
