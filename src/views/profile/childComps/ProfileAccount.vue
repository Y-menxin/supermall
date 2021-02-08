<template>
  <div id="ProfileAccount">
      <div class="account-item">
        <div><span class="texts">0.00</span> 元</div>
        <div>我的余额</div>
      </div>
      <div class="account-item">
        <div><span class="texts">0</span>个</div>
        <div>我的优惠</div>
      </div>
      <div class="account-item">
        <div><span class="texts">0</span>分</div>
        <div>我的积分</div>
      </div>
  </div>
</template>

<script>
export default {
  name:'ProfileAccount'
}
</script>

<style scoped>
#ProfileAccount{
  margin-top:15px ;
  display: flex;
  padding: 10px;
  border-bottom: 15px solid #f2f5f8;
}
.account-item{
  text-align: center;
  flex: 1;
}
.texts{
  color: #ff5f3e;
  font-size: 22px;
}
</style>