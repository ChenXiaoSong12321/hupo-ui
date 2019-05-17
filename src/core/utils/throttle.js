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
<<<<<<< HEAD
export const debounce = () => {
  let debounceCache = {
    timeId: null,
    reject: null
=======
export const debounce = (waitTime = 500) => new Promise((resolve, reject) => {
  if (debounceCache.timeId) {
    clear()
>>>>>>> 1e2eb7b2d5085fcf02a5c798ef5430f37621d856
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
}
