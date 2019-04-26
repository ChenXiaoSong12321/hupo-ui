import { dialogOptions } from '../../../components/h-dialog/dialog'
import difference from '../../difference/difference.interface'
const parseOptions = options => typeof options === 'string' ? {
  message: options
} : options

export default class HDialog {
  methods = {
    __dialogSet__(options) {
      const current = difference.getCurrentPage()
      console.log(current)
      if (!current) return
      const page = difference.selectComponent(current, 'h-page')
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
