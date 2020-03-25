<template>
  <view class="h-demo-block" :class="{'h-demo-block--padding': padding}">
    <view v-if="title" class="h-demo-block-title">{{ title }}</view>
    <slot />
  </view>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    padding: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(demo-block) {
  @include e(title) {
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    color: rgba(69, 90, 100, 0.6);
    padding: 20px 15px 15px;
  }
  @include m(padding) {
    padding: 0 15px;
    @include e(title) {
      padding-left: 0;
    }
  }
}
</style>
