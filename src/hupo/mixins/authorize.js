import {
  regeneratorRuntime
} from '../../lib/index.js'
import {
  wxTools
} from '../../utils/index.js'

export default {
  properties: {
    authorize: {
      type: Object,
      value: {
        isAuth: '',
        lastMobileBindTime: ''
      },
      observer(newVal, oldVal) {
        if (newVal.isLogin != oldVal.isLogin) {
          this.setData({
            events: {}
          })
        }
        this.handleAuthorizeChange && this.handleAuthorizeChange()
      }
    }
  },
  data: {
    events: {}
  },
  methods: {
    async handleGetuserinfo(event = {}) {
      const auth = this.data.authorize
      if (event.detail.iv && event.detail.encryptedData) {
        this.triggerEventOnce('getuserinfo', event.detail || {})
        auth.isAuth = false
        this.$setAuth(auth)
        this.handleAuthorizeGetuserinfo && this.handleAuthorizeGetuserinfo()
        try {
          await this.$authorizeUpdateUserInfo(event.detail)
        } catch (error) {
          auth.isAuth = true
          this.$setAuth(auth)
        }
      } else {
        this.refuse()
      }
    },
    async handleGetphonenumber(event = {}) {
      const app = getApp()
      app.cache.authStatus = true
      const auth = this.data.authorize
      if (event.detail.iv && event.detail.encryptedData) {
        this.$loading({ title: '绑定中...' })
        this.triggerEventOnce('getphonenumber', event.detail || {})
        await wxTools.$nextTick()
        try {
          await this.delay(500)
          auth.lastMobileBindTime = +new Date()
          this.$setAuth(auth)
          await this.$authorizeBindMobile(event.detail)
          this.handleSuccess && this.handleSuccess()
          this.handleTap && this.handleTap()
        } catch (error) {
          auth.lastMobileBindTime = ''
          this.$setAuth(auth)
        }
        app.cache.authStatus = null
        this.$clear()
      } else {
        this.refuse()
      }
    },
    refuse() {
      wxTools.showModal({
        title: '提示',
        content: '请点击“允许”完成微信授权',
        showCancel: false,
        confirmText: '确定'
      })
    },
    triggerEventOnce(event, data = {}) {
      const events = this.data.events
      if (events[event]) return
      this.triggerEvent(event, data)
      events[event] = 1
      this.setData({
        events
      })
    }
  }
}
