<template>
  <div id="cartBottomBar">
    <div class="bar-btn">
      <check-button :isCheck="selectCheckAll" @click.native="checkAllClick"/>
      <span>全选</span>
    </div>

    <div class="total">
      <div>合计{{totalPrice}}</div>
    </div>

    <div class="settle-accounts" @click="accountsClick">
      结算({{totalLength}})
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CheckButton from "content/checkButton/CheckButton";
export default {

  name:'CartBottomBar',
  components: {
    CheckButton
  },
  computed:  {
    ...mapGetters(['cartLength','cartList']),
    totalPrice(){
      return '￥' + this.cartList.filter(item=>{
        return item.checked
      }).reduce((prev,item)=> {
        return prev += item.price * item.count
      },0).toFixed(2)
    },
    totalLength(){
      return this.cartList.filter(item=>{
        return item.checked
      }).length
    },
    selectCheckAll(){
      if (this.cartList.length === 0) return false
      return !(this.cartList.find(item => !item.checked))
    }
  },
  methods: {
    checkAllClick(){
      if (this.selectCheckAll) {
        // 多数据 需要用到遍历 如果全部选中的状态下点击全选 商品取消全选 
        this.cartList.forEach(item => item.checked = false);
      }else{
        // 全部不选中的状态下点击全选 商品全部选中
        this.cartList.forEach(item => item.checked = true);
      }
      // 错误做法
      // this.cartList.forEach(item => item.checked = !this.selectCheckAll);

    },
    accountsClick(){
      if (!this.selectCheckAll) {
        this.$toast.show('请选择商品')
      }
    }
  }

}
</script>

<style scoped>
#cartBottomBar{
  height: 44px;
  background-color: #eee;
  position: relative;
  line-height: 44px;
  display: flex;
}
.bar-btn{
  display: flex;
  align-items: center;
  margin-left: 5px ;
  width: 65px;
}
.total{
  flex: 1;
  text-align: center;
}
.settle-accounts{
  width: 90px;
  text-align: center;
  background-color: var(--color-high-text);
  color: #fff;
}
#check-button{
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
</style>