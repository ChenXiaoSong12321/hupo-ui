<template>
  <view class="h-qrcode">
    <!-- #ifndef MP-ALIPAY -->
    <canvas
      class="h-qrcode-canvas"
      :canvas-id="cid"
      :style="{width:cpSize+'px',height:cpSize+'px'}"
    />
    <!-- #endif -->
    <!-- #ifdef MP-ALIPAY -->
    <canvas :id="cid" :width="cpSize" :height="cpSize" class="h-qrcode-canvas" />
    <!-- #endif -->
    <image v-show="show" :src="result" :style="{width:cpSize+'px',height:cpSize+'px'}" />
  </view>
</template>
<script>
import { viewport } from '@hupo/core'
import QRCode from './qrcode.js'
export default {
  name: 'h-qrcode',
  props: {
    cid: {
      type: String,
      default: 'h-qrcode-canvas'
    },
    size: {
      type: Number,
      default: 400
    },
    show: {
      type: Boolean,
      default: true
    },
    value: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: '#ffffff'
    },
    foreground: {
      type: String,
      default: '#000000'
    },
    pdground: {
      type: String,
      default: '#000000'
    },
    icon: {
      type: String,
      default: ''
    },
    iconSize: {
      type: Number,
      default: 40
    },
    lv: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      result: ''
    }
  },
  computed: {
    cpSize() {
      return viewport.rpx2px(this.size)
    }
  },
  watch: {
    size(newValue, oldValue) {
      if (!!newValue && newValue !== oldValue && !!this.value) {
        setTimeout(() => {
          this._makeCode()
        }, 100)
      }
    },
    value(newValue, oldValue) {
      if (!!newValue && newValue !== oldValue) {
        setTimeout(() => {
          this._makeCode()
        }, 0)
      }
    }
  },
  mounted() {
    if (this.value) {
      setTimeout(() => {
        this._makeCode()
      }, 0)
    }
  },
  methods: {
    async _makeCode() {
      if (this.icon) {
        var [error, image] = await uni.getImageInfo({
          src: this.icon
        })
        if (error) return
      }
      if (this.value) {
        this.qrcode = new QRCode({
          context: this, // 上下文环境
          canvasId: this.cid, // canvas-id
          usingComponents: true, // 是否是自定义组件
          showLoading: false, // 是否显示loading
          text: this.value, // 生成内容
          size: this.cpSize, // 二维码大小
          background: this.background, // 背景色
          foreground: this.foreground, // 前景色
          pdground: this.pdground, // 定位角点颜色
          correctLevel: this.lv, // 容错级别
          // #ifdef H5
          image: '', // 二维码图标
          // #endif
          // #ifndef H5
          image: this.icon ? `/${image.path}` : '', // 二维码图标
          // #endif
          imageSize: this.iconSize, // 二维码图标大小
          cbResult: (res) => { // 生成二维码的回调
            this._result(res)
          }
        })
      }
    },
    _result(res) {
      this.result = res
      this.$emit('result', res)
    }
  }
}
</script>
<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(qrcode) {
  position: relative;
  @include e(canvas) {
    position: fixed;
    top: -99999rpx;
    left: -99999rpx;
    z-index: -99999;
  }
}
</style>

