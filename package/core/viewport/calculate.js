import cml from 'chameleon-api'
import defaultData from './defaultData'
import getChannel from '../utils/channel'
import {promise} from "@hupo/core";

async function calculate() {
  const data = JSON.parse(JSON.stringify(defaultData))
  const system = await cml.getSystemInfo()
  const channel = await getChannel()
  data.channel = channel
  data.viewportWidth = parseInt(system.viewportWidth)
  data.viewportHeight = parseInt(system.viewportHeight)
  switch (channel) {
    case 'HP_MALL':
      if (system.extraParams.platform == 'devtools') {
        data.capsuleHeight = 44
      } else if (system.os == 'android') {
        data.capsuleHeight = 48
      }
      data.statusBarHeight = system.extraParams.statusBarHeight
      if (system.extraParams.screenHeight - data.statusBarHeight > 750 && system.os != 'android') data.isAllScreen = true
      break
    case 'HP_WECHAT':
      if (/iphone/gi.test(window.navigator.userAgent) && window.screen.height >= 812) data.isAllScreen = true
      data.capsuleHeight = 0
      break
    case 'HP_H5':
      if (/iphone/gi.test(window.navigator.userAgent) && window.screen.height >= 812) data.isAllScreen = true
      break
    default:
      break
  }
  data.titleHeight = data.capsuleHeight + data.statusBarHeight
  if (data.statusBarHeight >= 44) {
    data.isHighHead = true
  }
  data.headerHeight = data.statusBarHeight + data.capsuleHeight
  // 全面屏 底部留空距离 34px
  data.bottomHeight = data.isAllScreen ? 34 : 0
  return data
}
export default async() => await promise.cache('calculate', () => calculate())
