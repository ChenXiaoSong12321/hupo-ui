import { HupoComponent } from '../create/component'
HupoComponent({
  props: {
    customClass: String,
    customStyle: String,
    // blue,primary
    type: {
      type: String,
      value: 'primary'
    },
    radius: Boolean,
    radiusValue: {
      type: [Number, String],
      value: ''
    },
    size: {
      type: String,
      value: 'large'
    },
    color: {
      type: String,
      value: ''
    },
    width: {
      type: [Number, String],
      value: ''
    },
    plain: {
      type: Boolean,
      value: true
    }
  },
  watch: {
    color(v) { this.setData({ _color: this.hex2rgba(v) }) }
  },
  data: {
    _color: ''
  },
  methods: {
    /**
     * 16进制颜色转换成rgba
     */
    hex2rgba(hex, opacity = '.3') {
      const rgb = []
      hex = hex.substr(1)// 去除 # 号
      hex.length === 3 && (hex = hex.replace(/(.)/g, '$1$1'))// 处理 "#abc" 成 "#aabbcc"

      hex.replace(/../g, v => rgb.push(parseInt(v, 0x10)))

      return `rgb${opacity ? 'a' : ''}(${rgb.join(',')}${opacity ? ',' + opacity : ''})`
    }

  }
})
