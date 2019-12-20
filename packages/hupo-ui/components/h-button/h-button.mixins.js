import throttle from 'lodash.throttle'

export default {
  props: {
    customStyle: {
      type: String,
      default: ''
    },
    radius: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'large'
    },
    plain: {
      type: Boolean,
      default: false
    },
    throttle: {
      type: Number,
      default: 500
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary'
    },
    openType: {
      type: String,
      default: ''
    },
    opacity: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      stateClass: ''
    }
  },
  watch: {
    throttle: 'refreshThrottleFn',
    plain: 'calcClass',
    disabled: 'calcClass',
    radius: 'calcClass',
    opacity: 'calcClass'
  },
  mounted() {
    this.refreshThrottleFn()
    this.calcClass()
  },
  methods: {
    calcClass() {
      const classes = ['plain', 'disabled', 'opacity', 'radius']
      let stateClass = ''
      classes.forEach(item => {
        if (this[item]) {
          stateClass += `is-${item} `
        }
      })
      this.stateClass = stateClass
    },
    btnEmit(type, data = {}) {
      if (this.disabled) return
      // eslint-disable-next-line no-useless-call
      this.throttleEmit.call(this, type, data)
    },
    refreshThrottleFn() {
      this.throttleEmit = throttle(function(type, data) { this.$emit(type, data) }, this.throttle)
    }
  }
}
