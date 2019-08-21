import cml from 'chameleon-api'
import difference from '../../difference/difference.interface'
import channelDifference from '../../utils/channelDifference'
import {wxTools} from '../../utils/hupo-core'
import url from '../../utils/url'
import {global} from '../../utils/hupo-core'

let indexRoute = ''
export default class Goto {
  created() {
    if (!indexRoute) {
      indexRoute = global.$routerConfig.routes[0].path
    }
  }
  methods = {
    // 判断 route 是否是首页
    $isHomeRoute(route) {
      return indexRoute.indexOf(route) > -1 || route === '/'
    },
    // 返回
    $back(backPageNum = -1) {
      if (global.router && global.router.historys) {
        const historys = global.router.historys
        global.router.historys = historys.splice(0, historys.length - Math.abs(backPageNum))
      }
      cml.navigateBack(backPageNum)
    },
    /*
      @返回首页请使用此api
      @加载过首页，会自动加载首页
    */
    $backToHome() {
      const reLaunch = () => {
        if (global.router && global.router.historys) {
          global.router.historys = []
        }
        this.$goto({
          path: indexRoute,
          redirect: true
        })
      }
      channelDifference('HP_H5', reLaunch)
      channelDifference('HP_WECHAT', reLaunch)
      channelDifference('HP_MALL', () => {
        wxTools.reLaunch({
          url: indexRoute
        })
      })
    },
    $handleGoto(event) {
      const dataset = difference.getDataset(event)
      let redirect = false
      const query = {}
      Object.keys(dataset).forEach(key => {
        if (key.indexOf('query') > -1) {
          const queryKey = key.replace(/query([A-Z])/, (a, v) => v.toLowerCase())
          query[queryKey] = dataset[key]
        } else if (key === 'redirect') {
          redirect = true
        }
      })
      const {
        path = '/'
      } = dataset
      this.$goto({
        path,
        query,
        redirect
      })
    },
    // 跳转
    // redirect -- 是否重定向
    $goto(options) {
      const {
        path = indexRoute, query = {}, redirect = false
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
        if (global.router && global.router.historys) {
          global.router.historys.pop()
        }
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
