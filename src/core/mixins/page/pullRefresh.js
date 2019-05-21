import difference from '../../difference/difference.interface'
export default class PullRefresh {
  onPullDownRefresh() {
    const scrolls = this.$getScrollComponents()
    scrolls.forEach(item => item.onPulldown())
  }
  onReachBottom() {
    const scrolls = this.$getScrollComponents()
    scrolls.forEach(item => item.onPullup())
  }
  methods = {
    $getScrollComponents() {
      const scrolls = difference.selector(this, '.cml-h-scroll')
      if (scrolls.length == 0) {
        console.error('请给h-scroll组件添加ref="h-scroll"属性')
      }
      return scrolls
    }
  }
}
