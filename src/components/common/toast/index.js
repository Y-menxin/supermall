import Toast from "./Toast.vue"
const obj = {}

obj.install = function (Vue) {

  // 1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  // 2.使用 new 的方式 根据组件构造器 可以创建一个组件对象出来
  const toast = new toastContrustor()

  // 3.将组件对象 手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  // 4.toast.$el 对应的就是 div
  document.body.appendChild(toast.$el)

  // 将 Toast 挂载到 Vue 的原型上
  Vue.prototype.$toast = toast
}

export default obj