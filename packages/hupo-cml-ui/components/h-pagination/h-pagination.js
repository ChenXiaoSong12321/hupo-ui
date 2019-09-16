
export default {
  props: {
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
      default: 10
    },
    bottomOffset: {
      type: Number,
      default: 0
    },
    loading: {
      type: Boolean,
      default: false
    },
    empty: {
      type: Boolean,
      default: false
    }
  },
  data: {
    pageIndex: 1
  },
  methods: {
    onPullup(event) {
      if (!this.loading) {
        this.pageIndex = this.pageIndex + 1
        this.$cmlEmit('pullup', {
          pageCount: this.pageCount,
          step: this.step,
          start: this.start,
          pageIndex: this.pageIndex
        })
      }
    }
  }
}
