<template>
  <div id="cart">
    <navbar>
      <div slot="center">购物车({{length}})</div>
    </navbar>
    <scroll class="content" ref='scroll'>
      <cart-list />
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import Navbar from 'common/navbar/Navbar.vue'
import CartList from './childComps/CartList.vue';
import CartBottomBar from './childComps/CartBottomBar.vue';

// 引入 mapGetters 可将 store 中的 getters 转换成 computed (映射到 局部计算属性)
import { mapGetters } from "vuex";
import Scroll from 'common/scroll/Scroll.vue';

export default {
  components: { 
    Navbar,
    CartList,
    Scroll,
    CartBottomBar,
  },
  name: 'Cart',
  computed: {
    // 第一种写法
    // ...mapGetters(['cartLength','cartList'])
    // 第二种写法
    ...mapGetters({
      length:'cartLength',
      list:'cartList'
    })
  },
  activated () {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
#cart{
  height: 100vh;
}
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}

.content{
  height: calc(100% - 44px - 49px - 44px);
  overflow: hidden;
}
</style>
