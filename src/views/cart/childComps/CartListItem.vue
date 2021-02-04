<template>
  <div id="CartListItem">
      <div class="item-button">
        <check-button :isCheck="product.checked" @click.native="checkClick" />
      </div>
      <div class="item-img">
        <img :src="product.image"  alt="商品图片"/>
      </div>

      <div class="item-detail">
        <div class="title ">{{this.product.title}}</div>
        <div class="desc">{{this.product.desc}}</div>
        <div class="detail-bottom">
          <span class="left price">￥{{this.product.price}}</span>
          <span class="right count">x{{this.product.count}}</span>
        </div>
      </div>
      </div>
</template>

<script>
import CheckButton from "content/checkButton/CheckButton";
export default {
name:'CartListItem',
components: {
  CheckButton
},
props: {
  product:{
    type:Object,
    defaule(){
      return {}
    }
  }
},
methods: {
  checkClick(){
    this.product.checked = !this.product.checked
  }
}
}
</script>

<style scoped>
#CartListItem{
  display: flex;
  width: 100%;
  font-size: 14px;
  padding: 5px;
  border-bottom: 1px solid #ccc;

}
.item-button{
  margin-right: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1px;
}
.item-img img{
  width: 80px;
  height: 100px;
  border-radius: 5px;
}
.item-detail{
  overflow: hidden;
  padding: 5px 10px;
  position: relative;
}
.item-detail .title{
  font-size: 15px;
  font-weight: 700;
}
.item-detail .desc{
  margin-top: 15px;
}
.title, .desc{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.detail-bottom{
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.detail-bottom .price{
  color: orangered;
}

</style>