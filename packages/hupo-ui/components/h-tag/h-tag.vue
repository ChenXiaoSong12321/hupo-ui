<template>
  <view class="h-tag" :class="[type ? 'h-tag--' + type : '']" :style="styles">
    <slot></slot>
  </view>
</template>

<script>
import style from '@hupo/core-sass-bem'
export default {
  name: 'h-tag',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: style.primaryColorCM1
    }
  },
  computed: {
    styles() {
      const style = {}
      if (this.type === 'default') {
        style.color = this.color
        if (this.plain) {
          style.border = `1px solid ${this.hex2rgba(this.color, 0.4)}`
        } else {
          style.backgroundColor = this.hex2rgba(this.color, 0.1)
        }
      }
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
@import './h-tag.scss';
</style>
