import commonPage from './page/index'

import Router from './page/router.js'
import mix from './index'
export default function page() {
  const Page = mix(...commonPage, Router, ...arguments)
  return new Page()
}
