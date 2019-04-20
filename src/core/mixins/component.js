import Goto from './common/Goto'
import mix from './index'
export default function component(Current) {
  const Component = mix(Goto, Current)
  return new Component()
}
