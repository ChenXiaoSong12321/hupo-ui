export default {
  methods: {
    _loadingNavbar() {
      return this._broadcast('h-page', 'toggleLoading', { navbarLoading: true })
    },
    _clearLoadingNavbar() {
      return this._broadcast('h-page', 'toggleLoading', { navbarLoading: false })
    },
    _getPageTitle() {
      return this._getCurrentPageComponents('h-page')[0].title
    },
    _setPageTitle(title) {
      return this._broadcast('h-page', 'toggleLoading', { selfTitle: title })
    }
  }
}
