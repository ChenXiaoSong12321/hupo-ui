import Goto from './common/goto'
import Event from './common/event'
import HDialog from './common/dialog'
import HTool from './common/tools'
import HToast from './common/toast'

import Router from './page/router'
import PullRefresh from './page/pullRefresh'
import mix from './index'
export default function page() {
  const Page = mix(HTool, Router, Event, Goto, HDialog, HToast, PullRefresh, ...arguments)
  return new Page()
}
