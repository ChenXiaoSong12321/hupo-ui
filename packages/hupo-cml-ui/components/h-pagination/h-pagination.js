
import difference from '../../core/difference/difference.interface'
export default {
  props: {
    start: {
      type: String,
      default: '1'
    },
    pulldown: {
      type: Boolean,
      default: true
    },
    step: {
      type: [String, Number],
      default: 1
    },
    pageCount: {
      type: [String, Number],
      default: 10
    },
    total: {
      type: Number,
      default: 0
    },
    value: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: []
    }
  },
  data: {
    empty: false,
    loading: true,
    status: 'INIT', // PULLDOWN_ING PULLUP_ING FINISH INIT PULLUP_DISABLED PULLDOWN_DISABLED
    stopStatus: {
      pulldown: null,
      pullup: null
    },
    length: {
      old: 0,
      new: 0
    },
    pageIndex: 1
  },
  watch: {
    total(n, o) {
      console.log(this.total, 'total')
      this.length.new = n
    },
    value(n) {
      if (n) {
        this.empty = false
        this.loading = true
      }
    },
    loading(n) {
      if (!n) {
        this.value = false
        this.$cmlEmit('input', { value: false })
      }
    },
    list(n, o) {
      console.log(this.list.length, 'list')
      this.length.new = n.length
    }
  },
  mounted () {
    this._on('stop', (options = {}) => {
      this.stopRefresh()
    })
  },
  methods: {
    onPulldown(event) {
      if (this.status !== 'PULLDOWN_DISABLED') {
        this.stopStatus.pulldown = event.detail
        this.status = 'PULLDOWN_ING'
        this.loading = true
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
      if (this.status !== 'PULLUP_DISABLED') {
        this.stopStatus.pullup = event.detail
        this.status = 'PULLUP_ING'
        this.loading = true
        this.pageIndex = this.pageIndex + 1
        this.$cmlEmit('pullup', {
          pageCount: this.pageCount,
          step: this.step,
          start: this.start,
          pageIndex: this.pageIndex
        })
      } else {
        event.detail.stop()
      }
    },
    // refresh 既不是上拉也不是下拉刷新
    async stopRefresh() {
      await difference.nextTick()

      console.log('stopRefresh', this.length.new, this.total)
      this.loading = false
      this.empty = false
      ;['pullup', 'pulldown'].forEach(item => {
        if (this.stopStatus[item]) {
          this.stopStatus[item].stop()
          this.stopStatus[item] = null
        }
      })
      switch (true) {
        case (this.status === 'PULLUP_ING' && (this.length.old === this.length.new || this.length.old % this.pageCount !== 0)):
          this.status = 'PULLUP_DISABLED'
          break
        case (this.status !== 'PULLUP_ING' && this.length.new === 0):
          this.empty = true
          break
        default:
          this.status = 'FINISH'
      }
      this.length.old = this.length.new
    }
  }
}
