import routerDifference from './router.difference.interface'
import {global} from '../../utils/hupo-core'

export default class Router {
  created() {
    if (!global.router) global.router = {}
    const route = routerDifference.getRouter(this)
    if (!global.router.historys || this.$isHomeRoute(route.path)) global.router.historys = []
    global.router.historys.push(route)
    global.router.current = this
    console.log(global)
  }
  beforeDestroy() {
    if (global.router.historys && global.router.historys.length > 1) {
      const route = routerDifference.getRouter(this)
      const prev = global.router.historys[global.router.historys.length - 2]
      if (JSON.stringify(route) == JSON.stringify(prev)) {
        global.router.historys.pop()
      }
    }
    global.router.current = null
  }
}
