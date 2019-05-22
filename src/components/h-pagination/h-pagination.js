export default class HPagination {
  props = {
    start: {
      type: String,
      default: '1'
    },
    step: {
      type: [String, Number],
      default: 1
    },
    pageCount: {
      type: [String, Number],
      default: 20
    },
    currentPageLength: {
      type: [String, Number],
      default: 0
    }
  }

  data = {
    empty: true,
    pageIndex: 1
  }
  watch = {
    currentPageLength(n, o) {
      console.log('currentPageLength', n, o)
      if (n != 0) this.empty = false
    }
  }
  computed = {
    loading() {
      return this.currentPageLength != this.pageCount
    }
  }

  methods = {
    onPulldown(event) {
      event.detail.stop()
      console.log('onPulldown')
      this.pageIndex = 1
      this.$cmlEmit('pulldown', {
        pageCount: this.pageCount,
        step: this.step,
        start: this.start,
        pageIndex: this.pageIndex
      })
    },
    onPullup() {
      console.log('onPullup')
      if (this.loading) {
        this.pageIndex = this.pageIndex + 1
        this.$cmlEmit('pullup', {
          pageCount: this.pageCount,
          step: this.step,
          start: this.start,
          pageIndex: this.pageIndex - 1
        })
      }
    }
  }
}
