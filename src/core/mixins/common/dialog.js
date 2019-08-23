import { dialogOptions } from '../../../components/h-dialog/dialog'
const parseOptions = options => typeof options === 'string' ? {
  message: options
} : options

export default {
  methods: {
    __dialogSet__(options) {
      const page = this.$getPageComponent()
      if (!page) return
      return page.dialogSet(options)
    },
    $alert(options) {
      options = parseOptions(options)
      options = dialogOptions({
        title: options.title || '',
        message: options.message || '',
        openType: options.openType || '',
        showCancelButton: false,
        confirmButtonText: options.confirmButtonText || '好的'
      })
      return this.__dialogSet__(options)
    },
    $confirm(options) {
      options = parseOptions(options)
      options = dialogOptions({
        title: options.title || '',
        message: options.message || '',
        openType: options.openType || '',
        showCancelButton: options.showCancelButton !== undefined ? options.showCancelButton : true,
        confirmButtonText: options.confirmButtonText || '确定',
        cancelButtonText: options.cancelButtonText || '取消'
      })
      return this.__dialogSet__(options)
    }
  }
}
