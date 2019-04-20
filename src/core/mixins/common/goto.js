import cml from 'chameleon-api'
import routerConfig from '../../../router.config.json'
import difference from '../../difference/difference.interface'
const indexRoute = routerConfig.routes[0].path
export default class Goto {
  methods = {
    // 判断 route 是否是首页
    $isHomeRoute(route) {
      return indexRoute.indexOf(route) > -1 || route === '/'
    },
    // 返回
    $back(backPageNum = -1) {
      cml.navigateBack(backPageNum)
    },
    /*
      @返回首页请使用此api
      @加载过首页，会自动加载首页
    */
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
    // 跳转
    // redirect -- 是否重定向
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
