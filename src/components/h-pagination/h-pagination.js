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
    total: 0,
    stop: _ => {},
    pageIndex: 1
  }

  watch = {
    currentPageLength(n, o) {
      console.log('currentPageLength', n, o)
      if (n != 0) {
        this.total = this.total + n
      }
    }
  }

  computed = {
    loading() {
      return this.currentPageLength != this.pageCount
    }
  }

  methods = {
    onPulldown(event) {
      console.log('onPulldown')
      this.stop = event.detail.stop
      this.pageIndex = 1
      this.total = 0
      this.$cmlEmit('pulldown', {
        pageCount: this.pageCount,
        step: this.step,
        start: this.start,
        pageIndex: this.pageIndex
      })
    },
    onPullup(event) {
      console.log('onPullup')
      this.stop = event.detail.stop
      if (this.loading) {
        this.pageIndex = this.pageIndex + 1
        this.$cmlEmit('pullup', {
          pageCount: this.pageCount,
          step: this.step,
          start: this.start,
          pageIndex: this.pageIndex - 1
        })
      } else {
        this.stop()
      }
    }
  }
}
