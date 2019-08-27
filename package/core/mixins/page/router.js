import routerDifference from './router.difference.interface'
import {global} from '@hupo/core'

export default {
  created() {
    if (!global._router) global._router = {}
    const route = routerDifference.getRouter(this)
    if (!global._router.historys || this.$isHomeRoute(route.path)) global._router.historys = []
    global._router.historys.push(route)
    global._router.current = this
    console.log(global)
  },
  beforeDestroy() {
    if (global._router.historys && global._router.historys.length > 1) {
      const route = routerDifference.getRouter(this)
      const prev = global._router.historys[global._router.historys.length - 2]
      if (JSON.stringify(route) == JSON.stringify(prev)) {
        global._router.historys.pop()
      }
    }
    global._router.current = null
  }
}
