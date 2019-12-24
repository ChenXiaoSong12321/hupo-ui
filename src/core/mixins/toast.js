const defaultOptions = {
  type: 'text',
  message: '',
  duration: 3000,
  show: true,
  mask: false,
  needIcon: false
}

const parseOptions = options => typeof options === 'string' ? { message: options } : options
const toastOptions = options => Object.assign({}, defaultOptions, options)
let timer = null
const handleToastBroadcast = function(options, typeOptions) {
  return new Promise((resolve, reject) => {
    clearTimeout(timer)
    options = parseOptions(options)
    options = toastOptions({ ...typeOptions, ...options })
    this.$root._broadcast('h-toast', 'toggle', options)
    if (options.duration > 0) {
      timer = this._setTimeout(_ => {
        this._clearToast()
        resolve()
      }, options.duration)
    }
  })
}
export default {
  methods: {
    _toast(options = {}) {
      return handleToastBroadcast.call(this, options)
    },
    _loadingToast(options = {}) {
      return handleToastBroadcast.call(this, options, { message: '加载中...', duration: -1, needIcon: true, type: 'loading' })
    },
    _clearToast() {
      this.$root._broadcast('h-toast', 'toggle', { show: false })
    },
    _failToast(options = {}) {
      return handleToastBroadcast.call(this, options, { needIcon: true, type: 'warn' })
    },
    _successToast(options = {}) {
      return handleToastBroadcast.call(this, options, { needIcon: true, type: 'success' })
    }
  }
}
