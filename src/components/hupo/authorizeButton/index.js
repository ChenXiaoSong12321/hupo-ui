import {
  createComponent
} from '../../lib/index.js'
import {
  common
} from '../../utils/index.js'
import button from '../mixins/button'
import authorize from '../mixins/authorize'
const currentComponent = createComponent({
  mixins: [common, button, authorize],
  properties: {
    type: {
      type: String,
      value: 'primary'
    },
    transition: {
      type: Boolean,
      value: false
    }
  },
  relations: {
    '../buttonGroup/index': {
      type: 'parent'
    }
  },
  data: {
    popup: {
      mobile: false
    }
  },
  ready() {
    this.setData({
      events: {}
    })
  },
  methods: {
    handleTap() {
      if (!this.data.authorize.isAuth && this.data.authorize.lastMobileBindTime) {
        this.triggerEvent('click')
      }
    },
    handleSuccess() {
      if (!this.data.authorize.isAuth && this.data.authorize.lastMobileBindTime) {
        this.triggerEventOnce('success')
      }
    },
    hiddenMobilePopup() {
      this.setData({
        'popup.mobile': false
      })
    },
    handleAuthorizeGetuserinfo() {
      this.setData({
        'popup.mobile': true
      })
    }
  }
})
Component(currentComponent)
