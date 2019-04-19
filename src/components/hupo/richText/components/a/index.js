import { regeneratorRuntime, createComponent } from '../../../../lib/index.js'
import { common } from '../../../../utils/index.js'
const currentComponent = createComponent({
  mixins: [common],
  properties: {
    nodes: {
      type: Object,
      value: {}
    }
  }
})
Component(currentComponent)

