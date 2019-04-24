import difference from '../../difference/difference.interface'

export default class Event {
  methods = {
    $eventbusOn(event, fn) {
      const app = difference.getApp()
      app.$eventbus.on(event, fn)
    },
    $eventbusEmit(event, ...params) {
      const app = difference.getApp()
      app.$eventbus.emit(event, ...params)
    },
    $eventbusOff(event, fn) {
      const app = difference.getApp()
      app.$eventbus.off(event, fn)
    }
  }
}
