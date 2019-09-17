import throttle from 'lodash.throttle'

export default {
  name: 'h-button',
  props: {
    customClass: {
      type: String,
      default: ''
    },
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
  computed: {
    stateClass() {
      const classes = ['group', 'plain', 'disabled', 'opacity']
      let stateClass = ''
      classes.forEach(item => {
        if (this[item] && (item != 'radius' || !this.group)) {
          stateClass += `is-${item} `
        }
      })
      return stateClass
    }
  },
  watch: {
    throttle() {
      this.refreshThrottleFn()
    }
  },
  mounted() {
    this.refreshThrottleFn()
  },
  methods: {
    btnEmit(type, data = {}) {
      // eslint-disable-next-line no-useless-call
      this.throttleEmit.call(this, type, data)
    },
    refreshThrottleFn() {
      this.throttleEmit = throttle(function(type, data) { this.$cmlEmit(type, data) }, this.throttle)
    }
  }
}
