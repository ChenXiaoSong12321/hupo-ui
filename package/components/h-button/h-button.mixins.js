import { throttle } from '../../core/utils/throttle'

export default {
  name:'h-button',
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
      type: [Number, String],
      default: 500 // 当throttle <= 0，无防暴力点击
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
  mounted() {
    this.$throttleButton = throttle()
  },
  methods: {
    async btnEmit(type, data = {}) {
      if (this.throttle > 0) {
        await this.$throttleButton(this.throttle)
      }

      this.$cmlEmit(type, data)
      this.$cmlEmit('test', data)
    }
  }
}
