import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/reset.css'
import './assets/font/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
