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

export default {
  methods: {
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
      return this._broadcast('h-toast', 'toggle', options)
    },
    $loadingToast(options = {}) {
      options = parseOptions(options)
      options = Object.assign({ message: '加载中...', duration: -1 }, options, { needIcon: true, type: 'loading' })
      return this._broadcast('h-toast', 'toggle', options)
    },
    $clearToast() {
      const options = {
        show: false
      }
      return this._broadcast('h-toast', 'toggle', options)
    },
    $failToast(options = {}) {
      options = parseOptions(options)
      options = Object.assign(options, { needIcon: true, type: 'warn' })
      return this._broadcast('h-toast', 'toggle', options)
    },
    $successToast(options = {}) {
      options = parseOptions(options)
      options = Object.assign(options, { needIcon: true, type: 'success' })
      return this._broadcast('h-toast', 'toggle', options)
    }
  }
}
