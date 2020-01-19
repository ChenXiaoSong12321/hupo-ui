<template>
  <view class="h-progress" :style="progressStyle">
    <view class="h-progress-line" :style="progressLineStyle"></view>
  </view>
</template>

<script>
import style from '@hupo/core-sass-bem'
export default {
  name: 'h-progress',
  props: {
    percentage: {
      type: [String, Number],
      default: 40
    },
    color: {
      type: String,
      default: style.primaryColorCM1
    },
    height: {
      type: [Number, String],
      default: '10'
    }
  },
  computed: {
    progressStyle() {
      const style = {}
      style.height = this.height + 'rpx'
      style.borderRadius = this.height + 'rpx'
      style.borderColor = this.color
      style.backgroundColor = this.hex2rgba(this.color, 0.2)
      return this.transformStyle(style)
    },
    progressLineStyle() {
      const style = {}
      style.width = this.percentage + '%'
      style.backgroundColor = this.color
      return this.transformStyle(style)
    }
  },
  methods: {
    /**
     * 16进制颜色转换成rgba
     */
    hex2rgba(hex, opacity) {
      const rgb = []
      hex = hex.substr(1) // 去除 # 号
      hex.length === 3 && (hex = hex.replace(/(.)/g, '$1$1')) // 处理 "#abc" 成 "#aabbcc"

      hex.replace(/../g, v => rgb.push(parseInt(v, 0x10)))

      return `rgb${opacity ? 'a' : ''}(${rgb.join(',')}${
        opacity ? ',' + opacity : ''
      })`
    }
  }
}
</script>

<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(progress) {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  overflow: hidden;
  @include e(line) {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
  }
}
</style>
