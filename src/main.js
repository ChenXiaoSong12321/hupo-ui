import Vue from 'vue'
import App from './App'

import mixins from './core/mixins/index'

import { global } from '@hupo/core'

/*
ui 全局组件引入
必须使用这种方式
https://uniapp.dcloud.io/use?id=%e5%85%a8%e5%b1%80%e7%bb%84%e4%bb%b6
*/
// // 代码生成函数，注意修改模板
// var z = names => {
//   let importTemp = ''
//   let vueTemp = ''
//   names.forEach(name => {
//     const importName = name.replace(/-[a-z]/g, v => v.toUpperCase().replace(/-/g, ''))
//     importTemp += `
// import ${importName} from './components/${name}/${name}.vue'`
//     vueTemp += `
// Vue.component('${name}', ${importName})`
//   })
//   console.log(importTemp)
//   console.log(vueTemp)
// }
// z(['h-button', 'h-checkbox', 'h-dialog', 'h-icon', 'h-image', 'h-load-more', 'h-loading', 'h-navbar', 'h-page', 'h-pagination', 'h-popup', 'h-popup-base', 'h-progress', 'h-radio', 'h-rich-text', 'h-scroll', 'h-search', 'h-stepper', 'h-tab', 'h-tab-item', 'h-tab-pane', 'h-tab-pane-item', 'h-tabbar', 'h-tag', 'h-toast', 'h-transition'])

/*
--------------------------------------------------------------------------------------------------------------------------
*/

import hButton from './components/h-button/h-button.vue'
import hCheckbox from './components/h-checkbox/h-checkbox.vue'
import hDialog from './components/h-dialog/h-dialog.vue'
import hIcon from './components/h-icon/h-icon.vue'
import hImage from './components/h-image/h-image.vue'
import hLoadMore from './components/h-load-more/h-load-more.vue'
import hLoading from './components/h-loading/h-loading.vue'
import hNavbar from './components/h-navbar/h-navbar.vue'
import hPage from './components/h-page/h-page.vue'
import hPagination from './components/h-pagination/h-pagination.vue'
import hPopup from './components/h-popup/h-popup.vue'
import hPopupBase from './components/h-popup-base/h-popup-base.vue'
import hProgress from './components/h-progress/h-progress.vue'
import hRadio from './components/h-radio/h-radio.vue'
import hRichText from './components/h-rich-text/h-rich-text.vue'
import hScroll from './components/h-scroll/h-scroll.vue'
import hSearch from './components/h-search/h-search.vue'
import hStepper from './components/h-stepper/h-stepper.vue'
import hTab from './components/h-tab/h-tab.vue'
import hTabItem from './components/h-tab-item/h-tab-item.vue'
import hTabPane from './components/h-tab-pane/h-tab-pane.vue'
import hTabPaneItem from './components/h-tab-pane-item/h-tab-pane-item.vue'
import hTabbar from './components/h-tabbar/h-tabbar.vue'
import hTag from './components/h-tag/h-tag.vue'
import hToast from './components/h-toast/h-toast.vue'
import hTransition from './components/h-transition/h-transition.vue'
Vue.component('h-button', hButton)
Vue.component('h-checkbox', hCheckbox)
Vue.component('h-dialog', hDialog)
Vue.component('h-icon', hIcon)
Vue.component('h-image', hImage)
Vue.component('h-load-more', hLoadMore)
Vue.component('h-loading', hLoading)
Vue.component('h-navbar', hNavbar)
Vue.component('h-page', hPage)
Vue.component('h-pagination', hPagination)
Vue.component('h-popup', hPopup)
Vue.component('h-popup-base', hPopupBase)
Vue.component('h-progress', hProgress)
Vue.component('h-radio', hRadio)
Vue.component('h-rich-text', hRichText)
Vue.component('h-scroll', hScroll)
Vue.component('h-search', hSearch)
Vue.component('h-stepper', hStepper)
Vue.component('h-tab', hTab)
Vue.component('h-tab-item', hTabItem)
Vue.component('h-tab-pane', hTabPane)
Vue.component('h-tab-pane-item', hTabPaneItem)
Vue.component('h-tabbar', hTabbar)
Vue.component('h-tag', hTag)
Vue.component('h-toast', hToast)
Vue.component('h-transition', hTransition)
/*
--------------------------------------------------------------------------------------------------------------------------
*/

// 定义首页route
global.indexRoute = 'pages/index/index'
Vue.config.productionTip = false
mixins.forEach(item => {
  Vue.mixin(item)
})
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
