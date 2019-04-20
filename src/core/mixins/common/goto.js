import cml from 'chameleon-api'
import routerConfig from '../../../router.config.json'
import difference from '../../difference/difference.interface'
const indexRoute = routerConfig.routes[0].path
export default class Goto {
  data = {
    indexRoute
  }
  methods = {
    $isHomeRoute(route) {
      return indexRoute.indexOf(route) > -1 || route === '/'
    },
    $back(backPageNum = -1) {
      cml.navigateBack(backPageNum)
    },
    $backToHome() {
      const pages = difference.getCurrentPages();
      const first = pages[0]
      if (this.$isHomeRoute(first.route)) {
        this.$back(1 - pages.length)
      } else {
        this.$goto({
          path: indexRoute,
          redirect: true
        })
      }
    },
    $goto(options) {
      const {
        path = indexRoute, query = {}, redirect = false
      } = options
      if (redirect) {
        cml.navigateTo({
          path,
          query
        })
      } else {
        cml.redirectTo({
          path,
          query
        })
      }
    }
  }
}
