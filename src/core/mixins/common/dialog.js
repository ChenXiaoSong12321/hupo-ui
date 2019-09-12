import { dialogOptions } from '../../../components/h-dialog/dialog'

const parseOptions = options => typeof options === 'string' ? { message: options } : options
const hanleDialogOptions = (options, typeOptions) => {
  options = parseOptions(options)
  return dialogOptions({
    ...options,
    ...typeOptions,
    title: options.title || '',
    message: options.message || '',
    openType: options.openType || ''
  })
}

export default {
  methods: {
    _alert(options) {
      return this.__handleDialogBroadcast(options, {
        showCancelButton: false,
        confirmButtonText: options.confirmButtonText || '好的'
      })
    },
    _confirm(options) {
      return this.__handleDialogBroadcast(options, {
        showCancelButton: options.showCancelButton !== undefined ? options.showCancelButton : true,
        confirmButtonText: options.confirmButtonText || '确定',
        cancelButtonText: options.cancelButtonText || '取消'
      })
    },
    __handleDialogBroadcast(options, typeOptions) {
      return new Promise((resolve, reject) => {
        options = hanleDialogOptions(options, typeOptions)
        options = {
          ...options,
          promise: {
            resolve, reject
          }
        }
        this._broadcast('h-dialog', 'setDialogOptions', options)
      })
    }
  }
}
