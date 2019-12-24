<template>
  <view class="h-tab-pane">
    <view class="h-tab-pane-wrap" :style="paneWrap">
      <slot></slot>
    </view>
  </view>
</template>
<script>
export default {
  name: 'h-tab-pane',
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      }
    },
    activeLabel: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    paneWrap() {
      const width = this.tabs.length * 750// 总宽度；
      // findIndex找不到返回 -1

      const foundIndex = this.tabs.findIndex((item, index, arr) => {
        return this.activeLabel === item.label
      })
      const leftIndex = foundIndex == -1 ? 0 : foundIndex

      const leftOffset = leftIndex * 750
      return {
        width: width + 'rpx',
        transform: `translateX(${-leftOffset}rpx)`
      }
    }
  }
}
</script>
<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(tab-pane) {
  width: 750rpx;
  overflow-x: hidden;
  overflow-y: hidden;
  @include e(wrap) {
    display: flex;
    flex-direction: row;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    transition-property: transform;
  }
}
</style>
