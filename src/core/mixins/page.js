import Goto from './common/Goto'
import Router from './page/router'
import HupoApi from './page/hupoApi'
import mix from './index'
export default function page() {
  const Page = mix(Router, Goto, HupoApi, ...arguments)
  return new Page()
}
