import dayjs from 'dayjs'
import dayjsPluginUTC from 'dayjs-plugin-utc' // load on demand

dayjs.extend(dayjsPluginUTC) // use plugin
dayjs.formatDate = (time, type) => {
  if (isNaN(time)) return time
  return dayjs.utc(parseInt(time)).utcOffset(480).format(type)
}

export default dayjs
