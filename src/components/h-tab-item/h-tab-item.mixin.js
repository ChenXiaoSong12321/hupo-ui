import { primaryColor } from '@hupo/ui/core/options/style/var'
export default {
  props: {
    activeLabel: {
      type: String
    },
    hasUnderline: {
      type: Boolean,
      default: true
    },
    activeLabelStyle: {
      type: Object,
      default() {
        return {
          color: primaryColor,
          'border-bottom': '4rpx solid ' + primaryColor
        }
      }
    }
  }
}
