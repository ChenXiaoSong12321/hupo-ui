import Vue from 'vue'
import App from './App'

import mixins from './core/mixins/index'

import { global } from '@hupo/core'

/*
ui 全局组件引入
必须使用这种方式
https://uniapp.dcloud.io/use?id=%e5%85%a8%e5%b1%80%e7%bb%84%e4%bb%b6

---------------------------------------------------------------------------------------

// 代码生成函数，注意修改模板
var z = names => {
  let importTemp = ''
  let vueTemp = ''
  names.forEach(name => {
    const importName = name.replace(/-[a-z]/g, v => v.toUpperCase().replace(/-/g, ''))
    importTemp += `
import ${importName} from '@hupo/ui/components/${name}/${name}.vue'`
    vueTemp += `
Vue.component('${name}', ${importName})`
  })
  console.log(importTemp)
  console.log(vueTemp)
}
z(['h-button', 'h-checkbox', 'h-checkbox-group', 'h-dialog', 'h-field', 'h-field-group', 'h-icon', 'h-image', 'h-load-more', 'h-loading', 'h-navbar', 'h-page', 'h-pagination', 'h-popup', 'h-popup-base', 'h-progress', 'h-radio', 'h-radio-group', 'h-rich-text', 'h-scroll', 'h-search-bar', 'h-stepper', 'h-tab', 'h-tab-pane', 'h-tab-item', 'h-tabbar', 'h-tag', 'h-toast', 'h-transition', 'h-qrcode'])

--------------------------------------------------------------------------------------------------------------------------
*/

import hButton from '@hupo/ui/components/h-button/h-button.vue'
import hCheckbox from '@hupo/ui/components/h-checkbox/h-checkbox.vue'
import hCheckboxGroup from '@hupo/ui/components/h-checkbox-group/h-checkbox-group.vue'
import hDialog from '@hupo/ui/components/h-dialog/h-dialog.vue'
import hField from '@hupo/ui/components/h-field/h-field.vue'
import hFieldGroup from '@hupo/ui/components/h-field-group/h-field-group.vue'
import hIcon from '@hupo/ui/components/h-icon/h-icon.vue'
import hImage from '@hupo/ui/components/h-image/h-image.vue'
import hLoadMore from '@hupo/ui/components/h-load-more/h-load-more.vue'
import hLoading from '@hupo/ui/components/h-loading/h-loading.vue'
import hNavbar from '@hupo/ui/components/h-navbar/h-navbar.vue'
import hPage from '@hupo/ui/components/h-page/h-page.vue'
import hPagination from '@hupo/ui/components/h-pagination/h-pagination.vue'
import hPopup from '@hupo/ui/components/h-popup/h-popup.vue'
import hPopupBase from '@hupo/ui/components/h-popup-base/h-popup-base.vue'
import hProgress from '@hupo/ui/components/h-progress/h-progress.vue'
import hRadio from '@hupo/ui/components/h-radio/h-radio.vue'
import hRadioGroup from '@hupo/ui/components/h-radio-group/h-radio-group.vue'
import hRichText from '@hupo/ui/components/h-rich-text/h-rich-text.vue'
import hScroll from '@hupo/ui/components/h-scroll/h-scroll.vue'
import hSearchBar from '@hupo/ui/components/h-search-bar/h-search-bar.vue'
import hStepper from '@hupo/ui/components/h-stepper/h-stepper.vue'
import hTab from '@hupo/ui/components/h-tab/h-tab.vue'
import hTabPane from '@hupo/ui/components/h-tab-pane/h-tab-pane.vue'
import hTabItem from '@hupo/ui/components/h-tab-item/h-tab-item.vue'
import hTabbar from '@hupo/ui/components/h-tabbar/h-tabbar.vue'
import hTag from '@hupo/ui/components/h-tag/h-tag.vue'
import hToast from '@hupo/ui/components/h-toast/h-toast.vue'
import hTransition from '@hupo/ui/components/h-transition/h-transition.vue'
import hQrcode from '@hupo/ui/components/h-qrcode/h-qrcode.vue'
Vue.component('h-button', hButton)
Vue.component('h-checkbox', hCheckbox)
Vue.component('h-checkbox-group', hCheckboxGroup)
Vue.component('h-dialog', hDialog)
Vue.component('h-field', hField)
Vue.component('h-field-group', hFieldGroup)
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
Vue.component('h-radio-group', hRadioGroup)
Vue.component('h-rich-text', hRichText)
Vue.component('h-scroll', hScroll)
Vue.component('h-search-bar', hSearchBar)
Vue.component('h-stepper', hStepper)
Vue.component('h-tab', hTab)
Vue.component('h-tab-pane', hTabPane)
Vue.component('h-tab-item', hTabItem)
Vue.component('h-tabbar', hTabbar)
Vue.component('h-tag', hTag)
Vue.component('h-toast', hToast)
Vue.component('h-transition', hTransition)
Vue.component('h-qrcode', hQrcode)
/*
--------------------------------------------------------------------------------------------------------------------------
*/

import demoBlock from './pages/components/demo-block.vue'
import demoRow from './pages/components/demo-row.vue'
import demoPage from './pages/components/demo-page.vue'
Vue.component('demo-block', demoBlock)
Vue.component('demo-row', demoRow)
Vue.component('demo-page', demoPage)
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
