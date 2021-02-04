export default {
  // mutations 唯一的目的 就是修改 state 中的状态 可跟踪 
  // mutations 中的每一个方法 尽可能 完成的事比较 单一
  addCounter (state, payload) {
    payload.count += 1
  },
  addToCate (state, payload) {
    payload.checked = false
    state.cartlist.push(payload)

  }
}