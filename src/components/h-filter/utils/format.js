import C from './constant'
import U from './utils'
import cn from './zh-cn'

const newDate = defaultDate => {
  const date = defaultDate ? new Date(defaultDate) : new Date()
  const timezone = 8 // 目标时区时间，东八区
  const offsetGMT = date.getTimezoneOffset() // 本地时间和格林威治的时间差，单位为分钟
  const timestamp = date.getTime() // 本地时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数
  return new Date(timestamp + offsetGMT * 60 * C.MILLISECONDS_A_SECOND + timezone * 60 * 60 * C.MILLISECONDS_A_SECOND)
}

const parseDate = (date) => {
  if (date === null) return newDate() // Treat null as an invalid date
  if (U.isUndefined(date)) return newDate()
  if (date instanceof Date) return date
  return newDate(date) // timestamp
}

const formatDate = (date, formatStr) => {
  const _d = parseDate(date)
  const _y = _d.getFullYear()
  const _M = _d.getMonth()
  const _D = _d.getDate()
  const _W = _d.getDay()
  const _H = _d.getHours()
  const _m = _d.getMinutes()
  const _s = _d.getSeconds()
  const _ms = _d.getMilliseconds()
  const str = formatStr || C.FORMAT_DEFAULT
  const zoneStr = U.padZoneStr(_d.getTimezoneOffset())
  const {
    weekdays,
    months
  } = cn
  const getShort = (arr, index, full, length) => (
    (arr && arr[index]) || full[index].substr(0, length)
  )
  const regExp = new RegExp('/\[|\]/', 'g')
  const _format = function(match) {
    if (match.indexOf('[') > -1) return match.replace(regExp, '')
    switch (match) {
      case 'YY':
        return _y.toString().slice(-2)
      case 'YYYY':
        return _y.toString()
      case 'M':
        return ((_M + 1) + '')
      case 'MM':
        return U.padStart(_M + 1, 2, '0')
      case 'MMM':
        return getShort(cn.monthsShort, _M, months, 3)
      case 'MMMM':
        return months[_M]
      case 'D':
        return _D + ''
      case 'DD':
        return U.padStart(_D, 2, '0')
      case 'd':
        return _W + ''
      case 'dd':
        return getShort(cn.weekdaysMin, _W, weekdays, 2)
      case 'ddd':
        return getShort(cn.weekdaysShort, _W, weekdays, 3)
      case 'dddd':
        return weekdays[_W]
      case 'H':
        return _H + ''
      case 'HH':
        return U.padStart(_H, 2, '0')
      case 'h':
      case 'hh':
        if (_H === 0) return 12
        return U.padStart(_H < 13 ? _H : _H - 12, match === 'hh' ? 2 : 1, '0')
      case 'a':
        return _H < 12 ? 'am' : 'pm'
      case 'A':
        return _H < 12 ? 'AM' : 'PM'
      case 'm':
        return _m + ''
      case 'mm':
        return U.padStart(_m, 2, '0')
      case 's':
        return _s + ''
      case 'ss':
        return U.padStart(_s, 2, '0')
      case 'SSS':
        return U.padStart(_ms, 3, '0')
      case 'Z':
        return zoneStr
      default: // 'ZZ'
        return zoneStr.replace(':', '')
    }
  }

  return str.replace(C.REGEX_FORMAT, _format)
}

export default formatDate
