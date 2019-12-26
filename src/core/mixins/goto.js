import { global, url } from '@hupo/core'
// const getIndexRoute = () => global._routerConfig.routes[0].path
export default {
  methods: {
    // 返回
    _back(backPageNum = 1) {
      uni.navigateBack(backPageNum)
    },
    /*
      @返回首页请使用此api
      @加载过首页，会自动加载首页
    */
    _backToHome() {
      const pages = getCurrentPages()
      if (pages[0].route === global.indexRoute) {
        this._back(pages.length - 1)
      } else {
        uni.reLaunch({
          url: `/${global.indexRoute}`
        })
      }
    },
    _handleGoto(path = '', query = {}, redirect = false) {
      this._goto({
        path,
        query,
        redirect
      })
    },
    // 跳转
    // redirect -- 是否重定向
    _goto(options) {
      const {
        path = '', query = {}, redirect = false
      } = options
      const param = url.formatUrlParam(path)
      const queryMerge = Object.assign(param, query)
      const pathFilter = path.split('?')[0]
      console.groupCollapsed(`%cgoto debug: %c${pathFilter}`, 'color: #999', 'color: #0076ff')
      console.log({
        path: pathFilter,
        query: queryMerge,
        redirect: redirect
      })
      console.groupEnd()
      if (redirect) {
        uni.redirectTo({
          url: url.addUrlParam(queryMerge, pathFilter)
        })
      } else {
        uni.navigateTo({
          url: url.addUrlParam(queryMerge, pathFilter)
        })
      }
    }
  }
}
