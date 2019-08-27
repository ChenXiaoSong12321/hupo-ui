export default {
  methods: {
    $loadingNavbar() {
      return this._broadcast('h-page', 'toggleLoading', { navbarLoading: true })
    },
    $clearLoadingNavbar() {
      return this._broadcast('h-page', 'toggleLoading', { navbarLoading: false })
    },
    $getPageTitle() {
      return this._getCurrentPageComponents('h-page')[0].title
    },
    $setPageTitle(title) {
      return this._broadcast('h-page', 'toggleLoading', { selfTitle: title })
    }
  }
}
