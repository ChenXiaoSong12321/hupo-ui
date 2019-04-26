import difference from '../difference/difference.interface'
const exit = error => Promise.reject(new Error(error))
export default {
  exit,
  async cache(id, promise) {
    const app = difference.getApp()
    console.log(app,difference,difference.getApp,getApp())
    if (!app.promise) app.promise = {}
    if (!app.promise[id]) {
      app.promise[id] = promise()
    }
    try {
      return await app.promise[id]
    } catch (error) {
      app.promise[id] = null
      delete app.promise[id]
      return exit(error)
    }
  },
  del(id) {
    const app = difference.getApp()
    app.promise[id] = null
    delete app.promise[id]
  },
  delay(time) {
    return new Promise(resolve => {
      setTimeout(resolve, time)
    })
  }
}
