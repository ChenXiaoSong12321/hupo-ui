import cml from 'chameleon-api'
import defaultData from './defaultData'
import getChannel from '../utils/channel'
import promise from '../utils/promise'
async function calculate() {
  const data = JSON.parse(JSON.stringify(defaultData))
  const system = await cml.getSystemInfo()
  const channel = await getChannel()
  data.channel = channel
  data.viewportWidth = parseInt(system.viewportWidth)
  data.viewportHeight = parseInt(system.viewportHeight)
  // console.log(system, channel)
  switch (channel) {
    case 'HP_MALL':
      if (system.extraParams.platform == 'devtools') {
        data.capsuleHeight = 44
      } else if (system.os == 'android') {
        data.capsuleHeight = 48
      }
      data.statusBarHeight = system.extraParams.statusBarHeight
      break
    case 'HP_WECHAT':
      data.capsuleHeight = 0
      break
    default:
      break
  }
  if (data.viewportHeight - data.statusBarHeight > 750 && system.os != 'android') data.isAllScreen = true
  data.titleHeight = data.capsuleHeight + data.statusBarHeight
  if (data.statusBarHeight >= 44) {
    data.isHighHead = true
  }
  data.headerHeight = data.statusBarHeight + data.capsuleHeight
  // 全面屏 底部留空距离 34px
  data.bottomHeight = 34
  return data
}
export default async() => await promise.cache('calculate', calculate())
