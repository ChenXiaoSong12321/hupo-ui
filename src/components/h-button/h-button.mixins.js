import difference from '../../core/mixins/difference.interface'
class HButtonMixins {
  props = {
    customClass: String,
    customStyle: String,
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
    openType: String,
    opacity: {
      type: Boolean,
      default: false
    }
  }

  computed = {
    stateClass() {
      console.log(difference)
      const classes = ['group', 'plain', 'disabled', 'opacity']
      let stateClass = ''
      classes.forEach(item => {
        if (this[item] && (item != 'radius' || !this.group)) {
          stateClass += `is-${item} `
        }
      })
      return stateClass
    }
  }
  
  methods = {
    async  __emit__(type, data = {}) {
      console.log(data)
      if (this.throttle > 0) {
        await this.$throttle(this.throttle)
      }
      this.$cmlEmit(type, data)
    }
    
  }

}

export default HButtonMixins