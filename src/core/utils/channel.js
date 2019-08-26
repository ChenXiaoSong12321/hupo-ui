import cml from 'chameleon-api'
import {promise} from "@hupo/core";

function isWechat() {
  var ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true
  } else {
    return false
  }
}
async function calc() {
  let channel = 'HP_MALL'
  const system = await cml.getSystemInfo()
  switch (system.env) {
    case 'wx':
      channel = 'HP_MALL'
      break
    case 'web':
      channel = 'HP_H5'
      if (isWechat()) {
        channel = 'HP_WECHAT'
      }
      break
  }
  return channel
}
export default async() => await promise.cache('channel', () => calc())
