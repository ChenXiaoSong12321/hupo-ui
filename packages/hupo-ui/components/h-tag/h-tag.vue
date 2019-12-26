<template>
  <view
    class="h-tag"
    :class="[type ? 'h-tag--' + type : '', size ? 'h-tag--' + size : '']"
    :style="styles"
  >
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: 'h-tag',
  props: {
    styles: {
      type: Object,
      default() {
        return {}
      }
    },
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'medium'
    },
    plain: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    style() {
      const style = {}
      if (this.color) {
        if (this.plain) {
          style.color = this.color
          style.border = `1px solid ${this.hex2rgba(this.color)}`
        } else {
          style.color = '#fff'
          style.border = `1px solid ${this.color}`
          style.backgroundColor = this.color
        }
      }
      return this.transformStyle({
        ...this.styles,
        ...style
      })
    }
  },
  methods: {
    /**
     * 16进制颜色转换成rgba
     */
    hex2rgba(hex, opacity = '.4') {
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
@import "./h-tag.scss";
</style>
