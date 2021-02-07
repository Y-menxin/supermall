export default {
  // 比较复杂的操作 可以在写 actions 中
  addCart (context, payload) {
    return new Promise((resolve, reject) => {
      // 查找 购物车 中有没有 已经添加的商品
      let oldProduct = context.state.cartlist.find(item => item.iid === payload.iid)
      if (oldProduct) {
        // 已经添加过 数量加 1
        context.commit('addCounter', oldProduct)
        resolve('商品数量+1')
      } else {
        // 没有添加过 数量为 1 添加到购物车中
        payload.count = 1
        context.commit('addToCate', payload)
        resolve('添加商品成功')
      }
    })
  }
}