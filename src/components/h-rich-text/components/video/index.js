Component({
  properties: {
    nodes: {
      type: Object,
      value: {},
      observer() {
        this.init()
      }
    }
  },
  data: {
    video: {}
  },
  ready() {
    this.init()
  },
  methods: {
    init() {
      const nodes = this.data.nodes
      const video = {}
      if (nodes.attr && nodes.attr.src && nodes.attr.src.indexOf('qq.com') > -1) {
        video.type = 'tencentvideo'
        video.vid = nodes.attr.src.split('/').pop().replace(/\.html/, '')
      }
      this.setData({
        video
      })
    }
  }
})
