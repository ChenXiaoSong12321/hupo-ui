function setAsync(context, data) {
  return new Promise(resolve => {
    context.setData(data, resolve)
  })
}

export const behavior = Behavior({
  created() {
    const _this = this

    if (!this.$options) {
      return
    }

    const cache = {}

    const _this$$options = this.$options()
    const computed = _this$$options.computed

    const keys = Object.keys(computed)

    this.calcComputed = _ => {
      const needUpdate = {}
      keys.forEach(key => {
        const value = computed[key].call(_this)

        if (cache[key] !== value) {
          cache[key] = needUpdate[key] = value
        }
      })
      return needUpdate
    }
  },
  attached() {
    this.set()
  },
  methods: {
    set(data, callback) {
      const _this2 = this

      const stack = []

      if (data) {
        stack.push(setAsync(this, data))
      }

      if (this.calcComputed) {
        stack.push(setAsync(this, this.calcComputed()))
      }

      return Promise.all(stack).then(res => {
        if (callback && typeof callback === 'function') {
          callback.call(_this2)
        }

        return res
      })
    }
  }
})
