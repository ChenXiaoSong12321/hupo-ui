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
      const page = difference.selectComponent(current, 'h-page')
      if (!page) return null
      return page
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
