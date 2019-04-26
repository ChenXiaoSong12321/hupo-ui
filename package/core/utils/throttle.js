let __lastTapTime__
export function $throttle(gapTime = 500) {
  return new Promise((resolve, reject) => {
    const nowTime = +new Date()
    if (!__lastTapTime__ || nowTime - __lastTapTime__ > gapTime) {
      __lastTapTime__ = nowTime
      resolve()
    } else {
      reject('throttle')
    }
  })
}
