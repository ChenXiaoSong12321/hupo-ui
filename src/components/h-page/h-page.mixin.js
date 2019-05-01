import cml from 'chameleon-api'
import defaultData from '../../core/viewport/defaultData'
import calculate from '../../core/viewport/calculate'
import difference from '../../core/difference/difference.interface'
import channelDifference from '../../core/utils/channelDifference'
import wxTools from '../../core/utils/wxTools'
const promise = {}

class HPageMixins {
  props = {
    title: {
      type: String,
      default: '琥珀亲子'
    },
    showHomeIcon: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'default'
    },
    background: {
      type: String,
      default: 'BgC3'
    },
    subtract: {
      type: Number,
      default: 0
    }
  };

  data = {
    loading: false,
    viewport: defaultData,
    status: '',
    selfTitle: ''
  };

  watch = {
    title(val) {
      this.selfTitle = val
    },
    type() {
      this.initNavigation()
    }
  }

  computed = {
    viewportHeight() {
      return Math.floor(cml.cpx2px(this.viewport.viewportHeight - this.subtract))
    }
  };

  async created() {
    this.selfTitle = this.title
    this.initNavigation()
    const data = await calculate()
    this.viewport = data
  }

  methods = {
    initNavigation() {
      channelDifference('HP_MALL', async () => {
        wxTools.setNavigationBarColor({
          frontColor: this.type === 'default' ? '#000000' : '#ffffff',
          backgroundColor: this.type === 'default' ? '#fafafa' : '#dd392e'
        })
      })
    },
    dialogConfirm(e) {
      if (promise.resolve) {
        promise.resolve(e.detail || {})
      }
      delete promise.resolve
      delete promise.reject
    },
    dialogCancel(e) {
      if (promise.reject) {
        promise.reject(e.detail || {})
      }
      delete promise.resolve
      delete promise.reject
    },
    dialogSet(options) {
      const dialog = difference.selectComponent(this, 'h-dialog')
      if (!dialog) return
      Object.keys(options).forEach(key => {
        dialog[key] = options[key]
      })
      return new Promise((resolve, reject) => {
        promise.resolve = resolve
        promise.reject = reject
      })
    },
    toastSet(options) {
      const toast = difference.selectComponent(this, 'h-toast')
      if (!toast) return
      Object.keys(options).forEach(key => {
        toast[key] = options[key]
      })
      return new Promise((resolve, reject) => {
        if (options.duration > 0) {
          this.$setTimeout(() => {
            toast.show = false
            resolve()
          }, options.duration)
        } else {
          reject()
        }
      })
    }
  }
}

export default HPageMixins
