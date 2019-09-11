import difference from '../../difference/difference.interface'
export default {
  onPullDownRefresh() {
    const scrolls = this.$getScrollComponents()
    scrolls.forEach(item => item.onPulldown())
  },
  onReachBottom() {
    const scrolls = this.$getScrollComponents()
    scrolls.forEach(item => item.onPullup())
  },
  methods: {
    $getScrollComponents() {
      const scrolls = difference.selector(this, '.cml-h-scroll')
      if (scrolls.length == 0) {
        let result = []
        const find = ctxs => {
          let subComponents = []
          ctxs.forEach(ctx => {
            subComponents = subComponents.concat(difference.selector(ctx, '.cml-view'))
          })
          subComponents.forEach(item => {
            const subScrolls = difference.selector(item, '.cml-h-scroll')
            if (subScrolls.length > 0) {
              result = subScrolls
            }
          })
          if (subComponents.length > 0) {
            find(subComponents)
          }
        }
        find([this])
        if (result.length == 0)console.warn('未能找到h-scroll组件')
        return result
      }
      return scrolls
    }
  }
}
