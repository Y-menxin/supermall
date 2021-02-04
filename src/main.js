import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import toast from "./components/common/toast"
Vue.config.productionTip = false

// 如果要使用 事件总线 $bus 必须要在 vue 原型中挂载
Vue.prototype.$bus = new Vue()

Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
