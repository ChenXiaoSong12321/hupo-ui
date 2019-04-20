import {
  common,
  wxTools
} from '../../../utils/index.js'
import {
  regeneratorRuntime,
  createComponent,
  wxParse
} from '../../../lib/index.js'
const currentComponent = createComponent({
  mixins: [common],
  properties: {
    document: {
      type: String,
      value: '',
      observer() {
        this.parse()
      }
    },
    type: {
      type: String,
      value: 'html'
    },
    renderNum: {
      type: Number,
      value: 5
    }
  },
  data: {
    nodes: [],
    _nodes: []
  },
  methods: {
    async parse() {
      if (!this.data.document) return
      const parsedData = wxParse(this.data.document)
      this.setData({
        nodes: parsedData.nodes
      })
      this.init()
    },
    async init() {
      const _nodes = new Map()
      const nodes = this.data.nodes
      const renderNum = this.data.renderNum
      if (nodes.length > renderNum) {
        for (let i = 0, len = nodes.length; i < len; i += renderNum) {
          const index = parseInt(i / renderNum)
          const item = nodes.slice(i, i + renderNum)
          _nodes.set(index, item)
        }
      } else {
        _nodes.set(0, nodes)
      }
      for (const [index, item] of _nodes) {
        this.setData({
          [`_nodes[${index}]`]: item
        })
        await wxTools.$nextTick(300)
        await this.delay(200)
      }
      this.triggerEvent('success')
    }
  }
})
Component(currentComponent)
