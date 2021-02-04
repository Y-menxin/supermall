<template>
  <div id="check-button" :class="{chang:isCheck}">
      <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name:'CheckButton',
  props: {
    isCheck:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
#check-button{
  border-radius: 20%;
  border: 1px solid rgb(75, 66, 66);
}
#check-button img{
  margin-bottom: -2px;
}
.chang{
  background-color: var(--color-high-text);
}
</style>