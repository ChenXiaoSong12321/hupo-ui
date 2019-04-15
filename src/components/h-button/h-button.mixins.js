class HButtonMixins {
  props = {
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
    type: {
      type: String,
      value: 'primary'
    },
    openType: String,
    opacity: {
      type: Boolean,
      value: false
    }
  }

  computed = {
    stateClass() {
      const classes = ['group', 'radius', 'plain', 'disabled', 'opacity']
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
      if (this.throttle > 0) {
        await this.$throttle(this.throttle)
      }
      this.$cmlEmit(type, data)
    }
    
  }

}

export default HButtonMixins