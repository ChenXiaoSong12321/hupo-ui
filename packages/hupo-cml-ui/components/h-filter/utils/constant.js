const SECONDS_A_MINUTE = 60
const SECONDS_A_HOUR = SECONDS_A_MINUTE * 60
const SECONDS_A_DAY = SECONDS_A_HOUR * 24
const SECONDS_A_WEEK = SECONDS_A_DAY * 7
const hundred = 100

const MILLISECONDS_A_SECOND = hundred * 10
const MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND
const MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND
const MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND
const MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND

// English locales
const MS = 'millisecond'
const S = 'second'
const MIN = 'minute'
const H = 'hour'
const D = 'day'
const W = 'week'
const M = 'month'
const Q = 'quarter'
const Y = 'year'
const DATE = 'date'

const FORMAT_DEFAULT = 'YYYY-MM-DD HH:mm:ss'

// regex
const REGEX_PARSE = new RegExp('/^(\d{4})-?(\d{1,2})-?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/')
const REGEX_FORMAT = new RegExp('/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS', 'g')

// const en = {
//   name: 'en',
//   weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
//   months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_')
// }
export default {
  SECONDS_A_MINUTE,
  SECONDS_A_HOUR,
  SECONDS_A_DAY,
  SECONDS_A_WEEK,
  MILLISECONDS_A_SECOND,
  MILLISECONDS_A_MINUTE,
  MILLISECONDS_A_HOUR,
  MILLISECONDS_A_DAY,
  MILLISECONDS_A_WEEK,
  MS,
  S,
  MIN,
  H,
  D,
  W,
  M,
  Q,
  Y,
  DATE,
  FORMAT_DEFAULT,
  REGEX_PARSE,
  REGEX_FORMAT
}
