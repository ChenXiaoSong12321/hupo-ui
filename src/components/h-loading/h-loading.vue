<template>
  <view class="h-loading" :style="{width: size, height: size}">
    <view class="h-loading-spinner" :class="'h-loading-spinner--' + type" :style="{color: color}">
      <block v-if="type === 'spinner'">
        <view
          v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
          :key="item"
          class="h-loading-dot"
        ></view>
      </block>
    </view>
  </view>
</template>

<script>
export default {
  name: 'h-loading',
  props: {
    size: {
      type: String,
      default: '60rpx'
    },
    type: {
      type: String,
      default: 'circular'
    },
    effect: {
      type: String,
      default: 'dark'
    }
  },
  computed: {
    color() {
      return ({
        dark: '#333',
        light: '#fff'
      })[this.effect] || ''
    }
  }
}
</script>

<style lang="scss">
@import "./h-loading.scss";
</style>
