// event.js
class Eventbus {
  constructor() {
    this.events = {}
    this.emitCache = {}
  }
  on(event, fn) {
    if (typeof fn != 'function') {
      console.error('fn must be a function')
      return
    }
    (this.events[event] = this.events[event] || []).push(fn)
    this.auto(event)
  }
  __emit__(event) {
    if (this.events[event] && this.events[event].length > 0) {
      let events = this.events[event]
      events = events.slice(0)
      const args = [].slice.call(arguments, 1)
      for (let i = 0, len = events.length; i < len; i++) {
        events[i].apply(null, args)
      }
      this.events[event] = null
      delete this.events[event]
    }
  }
  emit(event, ...params) {
    if (this.events[event] && this.events[event].length > 0) {
      this.__emit__(event, ...params)
    } else {
      this.emitCache[event] = params
    }
  }
  auto(event) {
    if (this.emitCache[event]) {
      this.__emit__(event, ...this.emitCache[event])
    }
    this.emitCache[event] = null
    delete this.emitCache[event]
  }
  off(event, fn) {
    // all
    if (!arguments.length) {
      this.events = {}
      return
    }
    // specific event
    const events = this.events[event]
    if (!events) return
    // remove all handlers
    if (arguments.length === 1) {
      delete this.events[event]
      return
    }
    // remove specific handler
    let cb
    for (let i = 0, len = events.length; i < len; i++) {
      cb = events[i]
      if (cb === fn) {
        events.splice(i, 1)
        break
      }
    }
    return
  }
}
export default Eventbus
