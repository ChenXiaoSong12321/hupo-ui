let __lastThrottleTime__ = null
export const throttle = (gapTime = 500) => new Promise((resolve, reject) => {
  const nowTime = +new Date()
  if (!__lastThrottleTime__ || nowTime - __lastThrottleTime__ > gapTime) {
    __lastThrottleTime__ = nowTime
    resolve()
  } else {
    reject('throttle')
  }
})
let debounceCache = {
  timeId: null,
  reject: null
}
const clear = () => {
  clearTimeout(debounceCache.timeId)
  debounceCache.reject()
  delete debounceCache.timeId
  delete debounceCache.reject
}
export const debounce = (waitTime = 500) => new Promise((resolve, reject) => {
  if (debounceCache.timeId) {
    clear()
  }
  debounceCache = {
    timeId: setTimeout(() => {
      resolve()
      clearTimeout(debounceCache.timeId)
      delete debounceCache.timeId
      delete debounceCache.reject
    }, waitTime),
    reject
  }
})
