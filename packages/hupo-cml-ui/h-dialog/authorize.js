export const filterType = (data, type) => {
  let result = ''
  // #ifdef H5
  result = 'confirm'
  // #endif
  // #ifdef MP-WEIXIN
  result = data.errMsg === `${type}:ok` ? 'confirm' : 'cancel'
  // #endif
  return result
}
