import difference from '../../difference/difference.interface'
export default class PullRefresh {
  onPullDownRefresh() {
    const pageScroll = this.__getPageScroll__()
    pageScroll && pageScroll.$cmlEmit('pulldown', pageScroll)
  }
  onReachBottom() {
    const pageScroll = this.__getPageScroll__()
    pageScroll && pageScroll.$cmlEmit('pullup', pageScroll)
  }

  methods = {
    __getPageScroll__() {
      const pageScroll = difference.selectComponent(this, 'h-page-scroll')
      if (!pageScroll) {
        console.error('请给h-page-scroll组件添加id：h-page-scroll，<h-page-scroll ref="h-page-scroll"></h-page-scroll>')
        return null
      }
      return pageScroll
    }
  }
}
