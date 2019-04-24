import Goto from './common/Goto'
import Event from './common/event'
import mix from './index'
export default function component() {
  const Component = mix(Goto, Event, ...arguments)
  return new Component()
}
