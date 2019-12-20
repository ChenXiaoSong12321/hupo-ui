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
const handleDialogBroadcast = function(options, typeOptions) {
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
export default {
  methods: {
    _alert(options) {
      return handleDialogBroadcast.call(this, options, {
        showCancelButton: false,
        confirmButtonText: options.confirmButtonText || '好的'
      })
    },
    _confirm(options) {
      return handleDialogBroadcast.call(this, options, {
        showCancelButton: options.showCancelButton !== undefined ? options.showCancelButton : true,
        confirmButtonText: options.confirmButtonText || '确定',
        cancelButtonText: options.cancelButtonText || '取消'
      })
    }
  }
}
