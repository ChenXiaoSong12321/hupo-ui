import { HupoComponent } from '../create/component'
HupoComponent({
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    // ad,system,other
    type: {
      type: String,
      value: 'ad'
    },
    top: String,
    customStyle: String
  },
  watch: {
    show(v) { this.setData({ _show: v }) }
  },
  data: {
    _show: false
  },
  methods: {
    close() {
      this.setData({ _show: false })
      this._emit('close', false)
    }
  }
})
