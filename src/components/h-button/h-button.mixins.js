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
      type: Boolean,
      default: true
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
  methods: {
    btnEmit(type, data = {}) {
      this.throttle ? this.emitThrottle(type, data) : this.emitNow(type, data)
    },
    emitNow(type, data) {
      this.$cmlEmit(type, data)
    },
    emitThrottle: throttle(function(type, data = {}) {
      this.$cmlEmit(type, data)
    }, 500)
  }
}
