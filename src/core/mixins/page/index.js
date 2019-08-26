import Goto from '../common/goto'
import HDialog from '../common/dialog'
import HTool from '../common/tools'
import HToast from '../common/toast'

import PullRefresh from './pullRefresh.js'

import {global} from '@hupo/core'

const PageStackMixin = {
  created() {
    global.$pageStack.addPage(this)
  },
  beforeDestroy() {
    global.$pageStack.removePage(this)
  },
  methods: {
    _getCurrentPageComponents(componentName){
      return this._children[componentName] || []
    },
    _broadcast(componentName, ...arg){
      const components = this._getCurrentPageComponents(componentName)
      components.forEach(item => {
        item._event.emit(...arg)
      })
    }
  }
}


export default [PageStackMixin, HTool, Goto, HDialog, HToast, PullRefresh]
