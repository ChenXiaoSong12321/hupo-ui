import Goto from './common/Goto'
import Router from './page/router'
import HDialog from './page/dialog'
import HToast from './page/toast'
import mix from './index'
export default function page() {
  const Page = mix(Router, Goto, HDialog, HToast, ...arguments)
  return new Page()
}
