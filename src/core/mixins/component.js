import Goto from './common/goto'
// import Event from './common/event'
import HDialog from './common/dialog'
import HTool from './common/tools'
import HToast from './common/toast'

import mix from './index'

export default function component() {
  const Component = mix(HTool, Goto, HDialog, HToast, ...arguments)
  return new Component()
}
