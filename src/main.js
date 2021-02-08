import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import FastClick from 'fastclick'
import VuelazyLoad from "vue-lazyload"
import toast from "./components/common/toast"
import "@/assets/font/iconfont.css"
Vue.config.productionTip = false

// 如果要使用 事件总线 $bus 必须要在 vue 原型中挂载
Vue.prototype.$bus = new Vue()

Vue.use(toast)

// 使用图片懒加载
Vue.use(VuelazyLoad)

// 解决 移动端 300ms 的延迟问题
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
