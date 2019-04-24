import cml from 'chameleon-api';
import defaultData from '../../core/viewport/defaultData';
import calculate from '../../core/viewport/calculate';
import difference from '../../core/difference/difference.interface'
const promise = {}

class HPageMixins {
  props = {
    loading: {
      type: Boolean,
      default: false
    },
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
    }
  };

  data = {
    viewport: defaultData,
    status: ''
  };

  computed = {
    viewportHeight() {
      return cml.cpx2px(parseInt(this.viewport.viewportHeight))
    }
  };

  async created() {
    const data = await calculate()
    this.viewport = data
  }

  methods = {
    dialogConfirm(e) {
      if (promise.resolve) {
        promise.resolve(e.detail || {})
      }
    },
    dialogCancel(e) {
      if (promise.reject) {
        promise.reject(e.detail || {})
      }
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
    }
  }
}

export default HPageMixins
