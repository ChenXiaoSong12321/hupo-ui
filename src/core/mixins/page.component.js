import commonPage from './page/index'

import mix from './index'
export default function page() {
  const Page = mix(...commonPage, ...arguments)
  return new Page()
}
