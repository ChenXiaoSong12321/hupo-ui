
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
    pages: {
      type: [String, Number],
      default: 999999
    },
    pageCount: {
      type: [String, Number],
      default: 10
    },
    bottomOffset: {
      type: Number,
      default: 200
    },
    loading: {
      type: Boolean,
      default: false
    },
    empty: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: -1
    }
  },
  data: {
    pageIndex: 1
  },
  mounted() {
    this.onPullup()
  },
  methods: {
    onPullup() {
      if (!this.loading && this.pageIndex <= this.pages) {
        this.$cmlEmit('pullup', {
          pageCount: this.pageCount,
          step: this.step,
          start: this.start,
          pageIndex: this.pageIndex
        })
        this.pageIndex = this.pageIndex + 1
      }
    }
  }
}
