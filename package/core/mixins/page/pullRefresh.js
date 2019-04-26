import difference from '../../difference/difference.interface'
export default class PullRefresh {
  onPullDownRefresh() {
    const pageScroll = this.__getPageScroll__()
    pageScroll && pageScroll.pulldown()
  }
  onReachBottom() {
    const pageScroll = this.__getPageScroll__()
    pageScroll && pageScroll.pullup()
  }

  methods = {
    __getPageScroll__() {
      const pageScroll = difference.selectComponent(this, 'h-page')
      if (!pageScroll) {
        console.error('请给h-page-scroll组件添加id：h-page<h-page-scroll ref="h-page"></h-page-scroll>')
        return null
      }
      return pageScroll
    }
  }
}
