import difference from '../../difference/difference.interface'
export default class Router {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const app = difference.getApp()
      if (!app.router) app.router = {}
      if (!app.router.historys || vm.$isHomeRoute(to.path)) app.router.historys = []
      app.router.historys.push({
        name: to.name,
        path: to.path,
        route: to.path,
        params: to.params,
        query: to.query
      })
      app.router.current = vm
    })
  }
}
