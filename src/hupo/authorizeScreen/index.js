import {
  createComponent,
  regeneratorRuntime
} from '../../lib/index.js'
import {
  common,
  wxTools
} from '../../utils/index.js'
import authorize from '../mixins/authorize'
const currentComponent = createComponent({
  mixins: [common, authorize],
  properties: {
    focus: {
      type: Boolean,
      value: false
    },
    user: {
      type: Object,
      value: {},
      observer() {
        this.setData({
          events: {}
        })
        this.handleSuccess()
      }
    }
  },
  data: {
    show: false,
    pageTitle: ''
  },
  async ready() {
    await this.$getToken()
    await wxTools.$nextTick()
    if (!this.data.authorize.isAuth && this.data.authorize.lastMobileBindTime && (!this.data.focus || !!this.data.user.mobile)) {
      this.handleSuccess()
    } else {
      const pageTitle = this.$viewportCommonGetTitle()
      this.setData({
        show: true,
        events: {},
        pageTitle
      })
      this.$viewportCommonSetTitle('微信授权登录')
    }
  },
  methods: {
    handleSuccess() {
      if (!this.data.authorize.isAuth && this.data.authorize.lastMobileBindTime && (!this.data.focus || !!this.data.user.mobile)) {
        if (this.data.pageTitle) this.$viewportCommonSetTitle(this.data.pageTitle)
        this.triggerEventOnce('success')
      }
    },
    handleAuthorizeChange() {
      this.handleSuccess()
    }
  }
})
Component(currentComponent)
