import Goto from './common/goto'
import Event from './common/event'

import Router from './page/router'
import HDialog from './page/dialog'
import HToast from './page/toast'
import PullRefresh from './page/pullRefresh'
import mix from './index'
export default function page() {
  const Page = mix(Router, Event, Goto, HDialog, HToast, PullRefresh, ...arguments)
  return new Page()
}
