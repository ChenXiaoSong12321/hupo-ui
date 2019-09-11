export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    // input的类型
    type: {
      type: String,
      default: 'text' // 枚举值 text number password
    },
    // input的placerholder
    placeholder: {
      type: String,
      default: ''
    },
    // 是否禁用input输入
    disabled: {
      type: Boolean,
      default: false
    },
    // 控制input是否聚焦
    focus: {
      type: Boolean,
      default: false
    },
    // 最大长度
    maxlength: {
      type: Number,
      default: 140
    },
    // 右下角返回键类型
    returnKeyType: { // 枚举值 done search next go
      type: String,
      default: 'done'
    },
    placerHolderColor: {
      type: String,
      default: '#bebebe'
    },
    cStyle: {
      type: String,
      default: ''
    },
    maxValue: { // type=number 最大值
      type: Number,
      default: Infinity
    },
    minValue: { // type=number 最小值
      type: Number,
      default: -Infinity
    }
  }
}
