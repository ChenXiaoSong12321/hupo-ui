
import Dialog from '../../../components/h-dialog/dialog'

const defaultOptions = options => typeof options === 'string' ? {
  message: options
} : options

export default {
  $alert(options) {
    options = defaultOptions(options)
    return Dialog({
      title: options.title || '',
      message: options.message || '',
      openType: options.openType || '',
      selector: '#h-dialog',
      showCancelButton: false,
      confirmButtonText: options.confirmButtonText || '好的',
    })
  },
  $confirm(options) {
    options = defaultOptions(options)
    return Dialog({
      title: options.title || '',
      message: options.message || '',
      html: options.html || '',
      openType: options.openType || '',
      selector: '#h-dialog',
      showCancelButton: options.showCancelButton !== undefined ? options.showCancelButton : true,
      confirmButtonText: options.confirmButtonText || '确定',
      cancelButtonText: options.cancelButtonText || '取消'
    })
  },
  $loading(options){
    console.log('loading')
  },
  $toast(options){
    console.log('toast')
  }
}
