import {global} from '../../utils/hupo-core'

export default class Event {
  methods = {
    $eventbusOn(event, fn) {
      global.$eventbus.on(event, fn)
    },
    $eventbusEmit(event, ...params) {
      global.$eventbus.emit(event, ...params)
    },
    $eventbusOff(event, fn) {
      global.$eventbus.off(event, fn)
    }
  }
}
