export const basic = Behavior({
  methods: {
    _emit() {
      this.triggerEvent.apply(this, arguments)
    },
    $viewportCommonGetCurrentPage() {
      const pages = getCurrentPages()
      return pages[pages.length - 1]
    },
    $throttle(gapTime = 500) {
      return new Promise((resolve, reject) => {
        const nowTime = +new Date()
        if (!this.__lastTapTime__ || nowTime - this.__lastTapTime__ > gapTime) {
          this.__lastTapTime__ = nowTime
          resolve()
        } else {
          reject('防抖节流抛出的reject，不用管它')
        }
      })
    }
  }
})
