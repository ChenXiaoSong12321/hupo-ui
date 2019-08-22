import cml from 'chameleon-api'
import promise from '@hupo/core-promise'

let __lastTapTime__ = null
export default {
  async getPosition(force = false) {
    try {
      if (force) {
        promise.del('this.getLocation')
      } else {
        const nowTime = +new Date()
        if (!__lastTapTime__ || nowTime - __lastTapTime__ > 15000) {
          console.log('throttle to get location')
          __lastTapTime__ = nowTime
          setTimeout(async() => await this.getLocation(), 200)
        }
      }
      return await promise.cache('this.getLocation', this.getLocation)
    } catch (error) {
      console.log(error)
      return ''
    }
  },
  async getLocation() {
    console.log(`force to get location`)
    let location = await cml.getLocationInfo()
    return {
      latitude: location.lat,
      longitude: location.lng,
    }
  },
  async getAreaId() {
    try {
      const res = await cml.getStorage('areaId')
      return res.data
    } catch (error) {
      console.log(error)
      return ''
    }
  },
  async setAreaId(areaId) {
    await cml.setStorage('areaId', areaId)
  }
}
