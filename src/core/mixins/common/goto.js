import cml from 'chameleon-api'
import { global, wxTools, channelInterface, url } from '@hupo/core'

const getIndexRoute = () => global._routerConfig.routes[0].path
export default {
  methods: {
    // 返回
    _back(backPageNum = -1) {
      cml.navigateBack(backPageNum)
    },
    /*
      @返回首页请使用此api
      @加载过首页，会自动加载首页
    */
    _backToHome() {
      const reLaunch = () => {
        this._goto({
          path: getIndexRoute(),
          redirect: true
        })
      }
      channelInterface({
        WX_H5: reLaunch,
        H5: reLaunch,
        WX_MINI_PROGRAM() {
          const pages = getCurrentPages()
          const indexRoute = getIndexRoute()
          if (`/${pages[0].route}` === indexRoute) {
            this._back(pages.length - 1)
          }else {
            wxTools.reLaunch({
              url: indexRoute
            })
          }
        }
      })
    },
    _handleGoto(path = getIndexRoute(), query = {}, redirect = false) {
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
        path = getIndexRoute(), query = {}, redirect = false
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
        cml.redirectTo({
          path: pathFilter,
          query: queryMerge
        })
      } else {
        cml.navigateTo({
          path: pathFilter,
          query: queryMerge
        })
      }
    }
  }
}
