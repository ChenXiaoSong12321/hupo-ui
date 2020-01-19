import style from '@hupo/core-sass-bem'
export default {
  // 标题
  title: '',
  // 内容
  message: ' ',
  // 按钮是否展示为纵向
  buttonsShowVertical: false,
  // 是否展示确定
  showConfirmButton: true,
  // 确认按钮文案
  confirmButtonText: '确定',
  // 确认按钮颜色
  confirmButtonColor: style.primaryColorCM1,
  // 是否展示取消
  showCancelButton: false,
  // 取消按钮文案
  cancelButtonText: '取消',
  // 取消按钮颜色
  cancelButtonColor: style.fontColorFC1,
  // 点击按钮自动关闭 dialog
  autoClose: true
}
