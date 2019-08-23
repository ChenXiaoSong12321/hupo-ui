// event.js
export default class Event {
  constructor() {
    this.events = {}
  }
  on(event, handler) {
    if (typeof handler != 'function') {
      console.error('callback handler must be a function')
      return
    }
    (this.events[event] = this.events[event] || []).push(handler)
  }
  emit(event) {
    if (this.events[event] && this.events[event].length > 0) {
      let events = this.events[event]
      if(events){
        const args = [].slice.call(arguments, 1)
        for (let i = 0, len = events.length; i < len; i++) {
            events[i].apply(null, args)
        }
      }
    }
  }
  off(event, handler) {
    this.events = this.events || {}
    // all
    if (!arguments.length) {
        this.events = {}
        return
    }

    let events = this.events[event]
    if (!events) return

    // remove all handlers
    if (arguments.length === 1) {
        delete this.events[event]
        return
    }

    // remove specific handler
    events.splice(events.indexOf(handler) >>> 0, 1);
    this.events[event] = events
    return
  }
}
