import cml from 'chameleon-api'
import promise from './promise'

const __lastTapTime__
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
          setTimeout(async () => await this.getLocation(), 200)
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
    return await cml.getLocationInfo()
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
    await cml.setStorage('areaId', areaId )
  }
  // async getPositionInfo(force = false) {
  //   const location = await this.getPosition(force)
  //   console.log('location', location)
  //   if (!location.latitude || !location.longitude) {
  //     return ''
  //   }
  //   let areaId = ''
  //   if (force) {
  //     const token = await this.$getToken()
  //     const response = await this.$api(api.index.apiGetByPosition, {
  //       token,
  //       latitude: location.latitude,
  //       longitude: location.longitude,
  //       version: config.configVersion
  //     })
  //     if (response.data.area) {
  //       areaId = response.data.area.id
  //       // this.setAreaId(areaId) // 防止主动选择城市被覆盖上获取定位后的areaId
  //     } else {
  //       areaId = ''
  //     }
  //   } else {
  //     areaId = await this.getAreaId()
  //   }
  //   return areaId ? { areaId, location } : areaId
  // }
}