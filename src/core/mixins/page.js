import Goto from './common/Goto'
import Router from './page/router'
import mix from './index'
export default function page(Current) {
  const Page = mix(Router, Goto, Current)
  return new Page()
}
