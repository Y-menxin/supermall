import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 如果要使用 事件总线 $bus 必须要在 vue 原型中挂载
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
