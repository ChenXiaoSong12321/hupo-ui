<template>
  <h-page title="Scroll 滚动区域">
    <h-scroll @pullup="pullup">
      <demo-block title="滚动区域自适应" padding></demo-block>
      <view class="h-demo-scroll-cell" v-for="(item, index) in list" :key="index">文本 {{index}}</view>
    </h-scroll>
  </h-page>
</template>

<script>

export default {
  data() {
    return {
      list: Array.from({ length: 100 }, () => '')
    }
  },
  methods: {
    pullup() {
      this._toast('滚动到底部')
    }
  }

}
</script>
<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(demo-scroll) {
  @include e(cell) {
    background: $--white;
    padding: 0 15px;
    border-bottom: 1px solid $--border-color-PC1;
    font-size: 28rpx;
    line-height: 75rpx;
  }
}
</style>
