export default {
  properties: {
    customClass: String,
    customStyle: String,
    radius: {
      type: Boolean,
      value: true
    },
    size: {
      type: String,
      value: 'large'
    },
    plain: {
      type: Boolean,
      value: false
    },
    throttle: {
      type: Number,
      value: 500 // 当throttle <= 0，无防暴力点击
    },
    disabled: {
      type: Boolean,
      value: false
    },
    openType: String,
    color: String,
    bgColor: String,
    opacity: {
      type: Boolean,
      value: false
    }
  }
}
