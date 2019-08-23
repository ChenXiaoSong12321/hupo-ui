import {getViewId, getComponentName} from './utils'
export default class PageStack {
  constructor(){
    this.initialize()
  }
  initialize(){
    this.pages = {}
  }
  addPage(page){
    const viewId = getViewId(page)
    page._children = {}
    if(!this.pages[viewId])this.pages[viewId] = page
  }
  removePage(page){
    const viewId = getViewId(page)
    delete this.pages[viewId]
  }
  addComponent(component){
    const componentName = getComponentName(component)
    if(!componentName){
      console.warn('you have to add componentName of component', component)
      return
    }
    const viewId = getViewId(component)
    const page = this.pages[viewId]
    if(!page._children[componentName])page._children[componentName] = []
    page._children[componentName].push(component)
    component._page = page
  }
  removeComponent(component){
    const componentName = getComponentName(component)
    if(!componentName){
      console.warn('you have to add componentName of component', component)
      return
    }
    const viewId = getViewId(component)
    const page = this.pages[viewId]
    if(page && page._children[componentName]){
      page._children[componentName].splice(page._children[componentName].indexOf(component) >>> 0, 1);
    }
  }
  trigger(route, methods, params){

  }
}
