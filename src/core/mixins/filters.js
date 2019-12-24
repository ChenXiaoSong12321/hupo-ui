import { format, dateUtils } from '@hupo/core'
export default {
  filters: {
    formatMoney: format.formatMoney,
    formatDate: dateUtils.format,
    formatDistance: format.formatDistance
  }
}
