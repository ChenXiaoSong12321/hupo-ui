
import difference from '../../core/difference/difference.interface'
export default class HPagination {
  props = {
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
      default: 20
    },
    total: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default: []
    }
  }

  data = {
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
  }

  watch = {
    total(n, o) {
      console.log(n, o, 'total')
    },
    list(n, o) {
      console.log([...n], o, 'list')
      this.length.new = n.length
    }
  }

  methods = {
    onPulldown(event) {
      console.log('onPulldown')
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
      console.log('onPullup', this.status)
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
