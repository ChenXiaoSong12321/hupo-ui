import throttle from 'lodash.throttle'

export default {
  props: {
    styles: {
      type: Object,
      default() {
        return {}
      }
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
  computed: {
    customStyle() {
      return this.transformStyle(this.styles)
    }
  },
  watch: {
    throttle: 'refreshThrottleFn',
    plain: 'calcClass',
    disabled: 'calcClass',
    radius: 'calcClass',
    opacity: 'calcClass',
    type: 'calcClass',
    size: 'calcClass'
  },
  mounted() {
    console.log(this)
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
      this.stateClass = `h-button--${this.type == 'none' ? '' : this.size} h-button--${this.type} ${stateClass}`
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
