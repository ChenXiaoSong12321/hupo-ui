<template>
  <view class="h-demo-row" :class="{'h-demo-row--between': spaceBetween}">
    <slot />
  </view>
</template>

<script>
export default {
  props: {
    spaceBetween: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(demo-row) {
  display: flex;
  flex-wrap: wrap;
  @include m(between) {
    justify-content: space-between;
  }
}
</style>
