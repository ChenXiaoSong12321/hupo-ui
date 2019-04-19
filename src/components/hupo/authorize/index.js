import {
  createComponent
} from '../../lib/index.js'
import {
  common
} from '../../utils/index.js'
import authorize from '../mixins/authorize'
const currentComponent = createComponent({
  mixins: [common, authorize],
  data: {
    show: false
  },
  methods: {
    toggleAuthorize() {
      this.setData({
        show: !this.data.show
      })
    },
    handleAuthorizeGetuserinfo() {
      const authorize = this.selectComponent('#hupo-authorize-button')
      authorize && authorize.setData({
        'popup.mobile': true
      })
    },
    handleAuthorizeChange() {
      if (!this.data.authorize.isAuth && this.data.authorize.lastMobileBindTime) {
        this.setData({
          show: false
        })
      }
    },
    handleSuccess() {
      if (!this.data.authorize.isAuth && this.data.authorize.lastMobileBindTime) {
        this.setData({
          show: false
        })
      }
    }
  }
})
Component(currentComponent)
