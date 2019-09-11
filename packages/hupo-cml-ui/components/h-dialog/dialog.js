import defaultData from './data'
function getParsedOptions(options = {}) {
  return Object.assign({
    // 自定义 btn 列表
    // { type: 按钮类型，回调时以此作为区分依据，text: 按钮文案, color: 按钮文字颜色 }
    buttons: []
  }, defaultData, options)
}

// options 使用参数
// pageCtx 页面 page 上下文
export const dialogOptions = options => {
  const parsedOptions = getParsedOptions(options)

  // 处理默认按钮的展示
  // 纵向排布确认按钮在上方
  const buttons = parsedOptions.buttons || []

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

  return Object.assign({}, parsedOptions, {
    buttons: buttons,
    showCustomBtns: showCustomBtns,
    key: '' + new Date().getTime(),
    show: true
  })
}
