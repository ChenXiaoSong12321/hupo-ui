let __lastTapTime__ = null
export const throttle = (gapTime = 500) => new Promise((resolve, reject) => {
  const nowTime = +new Date()
  if (!__lastTapTime__ || nowTime - __lastTapTime__ > gapTime) {
    __lastTapTime__ = nowTime
    resolve()
  } else {
    reject('throttle')
  }
})
