import Event from '../Event.js'

export default {
  created() {
    global.$pageStack.addComponent(this)
    this._event = new Event()
  },
  beforeDestroy() {
    global.$pageStack.removeComponent(this)
    this._off()
    delete this._event
  },
  methods: {
    _getCurrentPageComponents(componentName){
      return this._page._children[componentName] || []
    },
    _on(...arg){
      this._event.on(...arg)
    },
    _off(...arg){
      this._event.off(...arg)
    },
    _emit(...arg){
      this._event.emit(...arg)
    },
    _broadcast(componentName, ...arg){
      const components = this._getCurrentPageComponents(componentName)
      components.forEach(item => {
        item._event.emit(...arg)
      })
    }
  }
}
