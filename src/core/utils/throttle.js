export const throttle = () => {
  let __lastThrottleTime__ = null
  return (gapTime = 500) => new Promise((resolve, reject) => {
    const nowTime = +new Date()
    if (!__lastThrottleTime__ || nowTime - __lastThrottleTime__ > gapTime) {
      __lastThrottleTime__ = nowTime
      resolve()
    } else {
      reject('throttle')
    }
  })
}
// npm i --save lodash.debounce
// npm i --save lodash.throttle
export const debounce = () => new Promise((resolve, reject) => {
  if (debounceCache.timeId) {
    clear()
  }
  const clear = () => {
    clearTimeout(debounceCache.timeId)
    debounceCache.reject()
    delete debounceCache.timeId
    delete debounceCache.reject
  }
  return (waitTime = 500) => new Promise((resolve, reject) => {
    if(debounceCache.timeId){
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
})
