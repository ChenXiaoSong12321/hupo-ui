import Goto from './common/Goto'
import mix from './index'
export default function component() {
  const Component = mix(Goto, ...arguments)
  return new Component()
}
