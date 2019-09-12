import cml from 'chameleon-api'
import { viewport } from '@hupo/core'
let viewportData = {}
viewport(cml).then(data => {
  viewportData = data
})
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
    },
    _calcTop(top) {
      if (!viewportData.headerHeight) return top
      else return cml.px2cpx(viewportData.headerHeight) + top
    },
    _calcBottom(bottom) {
      if (!viewportData.bottomHeight) return bottom
      else return cml.px2cpx(viewportData.bottomHeight) + bottom
    }
  }
}
