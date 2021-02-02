<template>
  <div id="DetailBottomBar">
    <div class="bar-item bar-left">
      <div class="left-item">
        <i class="icon service"></i>
        <span>客服</span>
      </div>
      <div class="left-item">
        <i class="icon shop"></i>
        <span>店铺</span>
      </div>
      <div class="left-item">
        <i class="icon select"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="right-item text1">加入购物车</div>
      <div class="right-item text2">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBottomBar'
}
</script>

<style scoped>
#DetailBottomBar{
  height: 49px;
  position: fixed;
  bottom: -1px;
  left: 0;
  background-color: #fff;
  display: flex;
  width: 100%;
  text-align: center;
}
.bar-item{
  flex: 1;
  display: flex;
}

.left-item{
  flex: 1;
}
.left-item .icon{
  display: block;
  height: 22px;
  width: 22px;
  margin: 6px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.left-item  .service {
  background-position:0 -54px;
  }
.left-item  .shop {
  background-position:0 -98px;
}
.left-item  .select {
  background-position:0 -148px;
}
.right-item{
  flex: 1;
  line-height: 49px;
}
.bar-right .text1{
  background-color: #ffe817;
  color: #333;
}
.bar-right .text2{
  background-color: #f69;
  color: #fff;
}
</style>