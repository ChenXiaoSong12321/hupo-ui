<template>
  <view class="h-progress" :style="progressStyle">
    <view class="h-progress-line" :style="progressLineStyle"></view>
  </view>
</template>

<script>
export default {
  name: 'h-progress',
  props: {
    percentage: {
      type: [String, Number],
      default: 40
    },
    borderColor: {
      type: String,
      default: 'rgba(252, 38, 88, 1)'
    },
    color: {
      type: String,
      default: '#FC2658'
    },
    height: {
      type: [Number, String],
      default: '10'
    },
    backgroundColor: {
      type: String,
      default: '#FFE0E4'
    }
  },
  computed: {
    progressStyle() {
      return {
        'border-color': this.borderColor,
        'background-color': this.backgroundColor,
        'height': this.height + 'rpx'
      }
    },
    progressLineStyle() {
      return {
        'width': this.percentage / 100 + '%',
        'background-color': this.color,
        'height': this.height + 'rpx',
        'border-top-right-radius': this.height + 'rpx',
        'border-bottom-right-radius': this.height + 'rpx'
      }
    }
  }
}
</script>

<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(progress) {
  height: 10rpx;
  border-radius: 10rpx;
  border: 1rpx solid rgba(252, 38, 88, 1);
  background-color: #ffe0e4;
  @include e(line) {
    background-color: #fc2658;
    height: 10rpx;
    border-radius: 10rpx;
  }
}
</style>
