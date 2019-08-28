import { dialogOptions } from '../../../components/h-dialog/dialog'
const parseOptions = options => typeof options === 'string' ? {
  message: options
} : options

export default {
  methods: {
    _alert(options) {
      return new Promise((resolve,reject)=>{
        options = parseOptions(options)
        options = dialogOptions({
          title: options.title || '',
          message: options.message || '',
          openType: options.openType || '',
          showCancelButton: false,
          confirmButtonText: options.confirmButtonText || '好的',
          promise:{
            resolve, reject
          }
        })
        this._broadcast('h-dialog', 'setDialogOptions', options)
      })
    },
    _confirm(options) {
      return new Promise((resolve,reject)=>{
        options = parseOptions(options)
        options = dialogOptions({
          title: options.title || '',
          message: options.message || '',
          openType: options.openType || '',
          showCancelButton: options.showCancelButton !== undefined ? options.showCancelButton : true,
          confirmButtonText: options.confirmButtonText || '确定',
          cancelButtonText: options.cancelButtonText || '取消',
          promise:{
            resolve, reject
          }
        })
        this._broadcast('h-dialog', 'setDialogOptions', options)
      })
    }
  }
}
