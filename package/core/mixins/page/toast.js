
import Toast from '../../../components/h-toast/toast'

export default class HToast {
  methods = {
    $loading(option = {}) {
      return Toast.loading({
        type: 'loading',
        message: option.message || '加载中',
        selector: 'h-toast',
        needIcon:true,
        mask:option.mask || false,
        icon:'loading',
        duration: option.duration || 0
      })
    },
    $clear() {
      return Toast.clear()
    },
    $toast(option = {}) {
      return Toast.loading({
        message: option.message || option || 'please set message',
        selector: 'h-toast',
        needIcon: false,
        mask:option.mask || false,
        duration: option.duration || 3000
      })
    },
    $failToast(option = {}) {
      return Toast.loading({
        message: option || option.message || 'please set message',
        selector: 'h-toast',
        mask:option.mask || false,
        type:'warn',
        duration: option.duration || 3000
      })
    }
  }
}
