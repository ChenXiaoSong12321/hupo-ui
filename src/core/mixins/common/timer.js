export default {
  beforeDestroy() {
    (this.__setTimeout__ || []).forEach(item => {
      clearTimeout(item)
    })
  },
  methods: {
    _setTimeout(fn, delay) {
      if (!this.__setTimeout__) this.__setTimeout__ = []
      this.__setTimeout__.push(setTimeout(fn, delay))
    }
  }
}