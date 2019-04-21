import defaultData from './data'
import difference from '../../core/difference/difference.interface';
function getDialogCtx(_ref) {
  const selector = _ref.selector
  const pageCtx = _ref.pageCtx

  let ctx = pageCtx
  if (!ctx) {
    ctx = difference.getCurrentPage()
  }
  return ctx.selectComponent(selector)
}

function getParsedOptions() {
  const options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}

  return Object.assign({
    // 自定义 btn 列表
    // { type: 按钮类型，回调时以此作为区分依据，text: 按钮文案, color: 按钮文字颜色 }
    buttons: []
  }, defaultData, options)
}

// options 使用参数
// pageCtx 页面 page 上下文
function Dialog(options, pageCtx) {
  const parsedOptions = getParsedOptions(options)

  const dialogCtx = getDialogCtx({
    selector: parsedOptions.selector,
    pageCtx: pageCtx
  })
  if (!dialogCtx) {
    console.error('无法找到对应的dialog组件，请于页面中注册并在 wxml 中声明 dialog 自定义组件')
    return Promise.reject({ type: 'component error' })
  }

  // 处理默认按钮的展示
  // 纵向排布确认按钮在上方
  const _parsedOptions$button = parsedOptions.buttons
  const buttons = _parsedOptions$button === undefined ? [] : _parsedOptions$button

  let showCustomBtns = false
  if (buttons.length === 0) {
    if (parsedOptions.showConfirmButton) {
      buttons.push({
        type: 'confirm',
        text: parsedOptions.confirmButtonText,
        color: parsedOptions.confirmButtonColor,
        openType: parsedOptions.openType || ''
      })
    }

    if (parsedOptions.showCancelButton) {
      const cancelButton = {
        type: 'cancel',
        text: parsedOptions.cancelButtonText,
        color: parsedOptions.cancelButtonColor
      }
      if (parsedOptions.buttonsShowVertical) {
        buttons.push(cancelButton)
      } else {
        buttons.unshift(cancelButton)
      }
    }
  } else {
    showCustomBtns = true
  }

  return new Promise((resolve, reject)=> {
    let opts = Object.assign({}, parsedOptions, {
        buttons: buttons,
        showCustomBtns: showCustomBtns,
        key: '' + new Date().getTime(),
        show: true,
        promise: { resolve, reject }
      })
      Object.keys(opts).forEach(key=>{
        dialogCtx[key] = opts[key]
      })
  })
}

Dialog.close = function(options, pageCtx) {
  const parsedOptions = getParsedOptions(options)

  const dialogCtx = getDialogCtx({
    selector: parsedOptions.selector,
    pageCtx
  })

  if (!dialogCtx) {
    return
  }
  dialogCtx.show = false
  dialogCtx.promise = null
}

export default Dialog
