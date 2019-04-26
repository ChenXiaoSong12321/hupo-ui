const parseOptions = options => typeof options === 'string' ? {
  message: options
} : options

const defaultOptions = {
  type: 'text',
  message: '',
  duration: 3000,
  show: true,
  mask: false,
  needIcon: false
}

const toastOptions = options => Object.assign({}, defaultOptions, options)

export default class HToast {
  methods = {
    __toastSet__(options) {
      const page = this.$getPageComponent()
      if (!page) return
      return page.toastSet(options)
    },
    $toast(options = {}) {
      options = parseOptions(options)
      options = toastOptions({
        type: options.type || 'text',
        message: options.message || 'please set message',
        duration: options.duration || 3000,
        show: options.show === undefined,
        mask: options.mask || false,
        needIcon: options.needIcon || false
      })
      return this.__toastSet__(options)
    },
    $loadingToast(options = {}) {
      options = parseOptions(options)
      options = Object.assign(options, { message: '加载中', needIcon: true, type: 'loading', duration: options.duration || -1 })
      return this.$toast(options)
    },
    $clearToast() {
      const options = {
        show: false
      }
      return this.__toastSet__(options)
    },
    $failToast(options = {}) {
      options = parseOptions(options)
      options = Object.assign(options, { needIcon: true, type: 'warn' })
      return this.$toast(options)
    },
    $successToast(options = {}) {
      options = parseOptions(options)
      options = Object.assign(options, { needIcon: true, type: 'success' })
      return this.$toast(options)
    }
  }
}
