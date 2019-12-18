import Vue from 'vue'
import App from './App'

import mixins from './core/mixins/index'

/*
ui 全局组件引入
必须使用这种方式
https://uniapp.dcloud.io/use?id=%e5%85%a8%e5%b1%80%e7%bb%84%e4%bb%b6
*/

import Hbutton from './components/h-button/h-button.vue'
import Hdialog from './components/h-dialog/h-dialog.vue'
import Hicon from './components/h-icon/h-icon.vue'
import Himage from './components/h-image/h-image.vue'
import HloadMore from './components/h-load-more/h-load-more.vue'
import Hnavbar from './components/h-navbar/h-navbar.vue'
import Hpage from './components/h-page/h-page.vue'
import HpopupManager from './components/h-popup-manager/h-popup-manager.vue'
import HrichText from './components/h-rich-text/h-rich-text.vue'
import Htoast from './components/h-toast/h-toast.vue'
Vue.component('h-button', Hbutton)
Vue.component('h-dialog', Hdialog)
Vue.component('h-icon', Hicon)
Vue.component('h-image', Himage)
Vue.component('h-load-more', HloadMore)
Vue.component('h-navbar', Hnavbar)
Vue.component('h-page', Hpage)
Vue.component('h-popup-manager', HpopupManager)
Vue.component('h-rich-text', HrichText)
Vue.component('h-toast', Htoast)
/*
--------------------------------------------------------------------------------------------------------------------------
*/

Vue.config.productionTip = false
mixins.forEach(item => {
  Vue.mixin(item)
})
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
