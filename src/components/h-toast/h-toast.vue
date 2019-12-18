<template>
  <h-popup-manager :show="show" :mask="mask">
    <view
      class="h-toast-content"
      :class="[iconMap[type] ? 'h-toast-content--square' : 'h-toast-content--other']"
    >
      <view
        v-if="type==='loading'"
        class="h-toast-icon h-toast-icon--loading"
        style="width:80rpx;height:80rpx"
      ></view>
      <h-icon
        v-else-if="type==='success'||type==='warn'"
        :name="iconMap[type]"
        class="h-toast-icon"
        :class="[`h-toast-icon--${type}`]"
      ></h-icon>
      <view class="h-toast-text">{{message}}</view>
    </view>
  </h-popup-manager>
</template>
<script>
export default {
  name: 'h-toast',
  data() {
    return {
      type: 'loading',
      message: '',
      duration: 3000,
      show: false,
      mask: false,
      iconMap: {
        loading: 'iconjiazaizhong',
        warn: 'iconjuxing',
        success: 'iconjiazaichenggong'
      }
    }
  },
  mounted() {
    this._on('toggle', (options = {}) => {
      Object.keys(options).forEach(key => {
        this[key] = options[key]
      })
    })
  }
}
</script>
<style lang="scss">
@include b(toast) {
  @keyframes loading-rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @include e(content) {
    @include flexCenter;
    flex-direction: column;
    background-color: rgba(51, 51, 51, 0.9);
    border-radius: 8rpx;
    max-width: 510rpx;
    overflow: hidden;
    @include m(square) {
      width: 220rpx;
      height: 220rpx;
    }
    @include m(other) {
      padding: 13rpx 20rpx;
    }
  }
  @include e(icon) {
    color: #fff;
    font-size: 80rpx;
    margin-bottom: 6rpx;
    @include m(loading) {
      // animation: loading-rotate 1s steps(12, end) infinite;
      @include h-loading;
    }
  }
  @include e(text) {
    color: #fff;
    line-height: 1.5;
    font-size: 26rpx;
    word-break: break-all;
    word-wrap: break-word;
  }
}
</style>
