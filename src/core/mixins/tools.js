import { viewport, promise } from '@hupo/core'
export default {
  onPullDownRefresh() {
    this.$root._broadcast('h-page', 'emit-event', 'pulldown')
  },
  onReachBottom() {
    this.$root._broadcast('h-page', 'emit-event', 'pullup')
  },
  methods: {
    _loadingNavbar() {
      return this.$root._broadcast('h-page', 'toggle', { navbarLoading: true })
    },
    _clearLoadingNavbar() {
      return this.$root._broadcast('h-page', 'toggle', { navbarLoading: false })
    },
    _calcTop(top) {
      if (!viewport.headerHeight) return top
      else return viewport.headerHeight + top
    },
    _calcBottom(bottom) {
      if (!viewport.bottomHeight) return bottom
      else return viewport.bottomHeight + bottom
    },
    _getSystemInfo() {
      return promise.cache('getSystemInfo', () => uni.getSystemInfo())
    }
  }
}
