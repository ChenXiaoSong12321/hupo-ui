
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
    total: {
      type: Number,
      default: -1
    }
  }

  data = {
    empty: false,
    status: 'init', // pulldowning pulluping finish init disabledPullup disabledPulldown
    stop: {
      pulldown: null,
      pullup: null
    },
    pageIndex: 1
  }

  watch = {
    total(n, o) {
      console.log(n, o, 'total')
    },
    list(n, o) {
      console.log(n, o, 'list')
    }
  }

  computed = {

  }

  mounted() {
  }

  methods = {
    onPulldown(event) {
      console.log('onPulldown')
      if (this.status !== 'disabledPulldown') {
        this.stop.pulldown = event.detail.stop
        this.status = 'pulldowning'
        this.pageIndex = 1
        this.$cmlEmit('pulldown', {
          pageCount: this.pageCount,
          step: this.step,
          start: this.start,
          pageIndex: this.pageIndex
        })
      } else {
        event.detail.stop()
      }
    },
    onPullup(event) {
      console.log('onPullup')
      if (this.status !== 'disabledPullup') {
        this.stop.pullup = event.detail.stop
        this.status = 'pulluping'
        this.pageIndex = this.pageIndex + 1
        this.$cmlEmit('pullup', {
          pageCount: this.pageCount,
          step: this.step,
          start: this.start,
          pageIndex: this.pageIndex - 1
        })
      } else {
        event.detail.stop()
      }
    },
    stop() {
      this.stop.pullup()
      this.status = 'finish'
    }
  }
}
