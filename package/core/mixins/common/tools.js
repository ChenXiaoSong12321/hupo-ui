import difference from '../../difference/difference.interface'
export default class HTool {
  beforeDestroy() {
    (this.__setTimeout__ || []).forEach(item => {
      clearTimeout(item)
    })
  }
  methods = {
    $getPageComponent() {
      const current = difference.getCurrentPage()
      if (!current) return null
      const pages = difference.selector(current, '.cml-h-page')
      if (pages.length > 1 ){
        console.warn('一个页面只能使用一个h-page组件')
      }
      if (pages.length == 0 ){
        console.warn('h-page组件还未加载')
        return null
      }
      return pages[0]
    },
    $setTimeout(fn, delay) {
      if (!this.__setTimeout__) this.__setTimeout__ = []
      this.__setTimeout__.push(setTimeout(fn, delay))
    },
    $loadingNavbar() {
      const page = this.$getPageComponent()
      if (page) page.navbarLoading = true
    },
    $clearLoadingNavbar() {
      const page = this.$getPageComponent()
      if (page) page.navbarLoading = false
    },
    $getPageTitle() {
      const page = this.$getPageComponent()
      if (page) return page.selfTitle
      else return ''
    },
    $setPageTitle(title) {
      const page = this.$getPageComponent()
      if (page) page.selfTitle = title
    }
  }
}
