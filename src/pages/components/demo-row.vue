<template>
  <view class="h-demo-row">
    <slot />
  </view>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(demo-row) {
  display: flex;
  flex-wrap: wrap;
}
</style>
