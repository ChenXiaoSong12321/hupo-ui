import cml from 'chameleon-api'
import { viewport } from '@hupo/core'
export default {
  methods: {
    _loadingNavbar() {
      return this._broadcast('h-page', 'toggleLoading', { navbarLoading: true })
    },
    _clearLoadingNavbar() {
      return this._broadcast('h-page', 'toggleLoading', { navbarLoading: false })
    },
    _calcTop(top) {
      if (!viewport.headerHeight) return top
      else return cml.px2cpx(viewport.headerHeight) + top
    },
    _calcBottom(bottom) {
      if (!viewport.bottomHeight) return bottom
      else return cml.px2cpx(viewport.bottomHeight) + bottom
    }
  }
}
