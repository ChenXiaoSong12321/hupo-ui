import difference from '../../difference/difference.interface'
import routerDifference from './router.difference.interface'
export default class Router {
  created(){
    const app = difference.getApp()
    if (!app.router) app.router = {}
    const route = routerDifference.getRouter(this)
    if (!app.router.historys || this.$isHomeRoute(route.path)) app.router.historys = []
    app.router.historys.push(route)
    app.router.current = this
  }
  beforeDestroy() {
    const app = difference.getApp()
    if(app.router.historys && app.router.historys.length > 1){
      const route = routerDifference.getRouter(this)
      const prev = app.router.historys[app.router.historys.length - 2]
      if(JSON.stringify(route) == JSON.stringify(prev)){
        app.router.historys.pop()
      }
    }
    app.router.current = null
  }
}
