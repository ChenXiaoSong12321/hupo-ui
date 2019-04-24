import Goto from './common/goto'
import mix from './index'
export default function component() {
  const Component = mix(Goto, ...arguments)
  return new Component()
}
