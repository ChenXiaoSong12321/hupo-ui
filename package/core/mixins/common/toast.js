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

export default {
  methods: {
    _toast(options = {}) {
      this.__handleToastBroadcast(options)
    },
    _loadingToast(options = {}) {
      this.__handleToastBroadcast(options, { message: '加载中...', duration: -1 ,needIcon: true, type: 'loading' })
    },
    _clearToast() {
      this._broadcast('h-toast', 'toggle', { show: false })
    },
    _failToast(options = {}) {
      this.__handleToastBroadcast(options, { needIcon: true, type: 'warn'})
    },
    _successToast(options = {}) {
      this.__handleToastBroadcast(options,{ needIcon: true, type: 'success' })
    },
    __handleToastBroadcast(options, typeOptions){
      clearTimeout(timer)
      options = parseOptions(options)
      options = toastOptions({ ...typeOptions, ...options })
      this._broadcast('h-toast', 'toggle', options)
      if (options.duration > 0) timer = this._setTimeout(_=> this._clearToast() ,options.duration)
    }
  }
}
