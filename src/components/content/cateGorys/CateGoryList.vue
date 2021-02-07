<template>
  <div id="CateGoryList">
    <cart-list-item v-for="item in subCateGoryList" :key="item.acm" :listItem='item'/>
  </div>
</template>

<script>
import CartListItem from "./CateGoryListItem"

export default {
  name:'CateGoryList',
  props: {
    subCateGoryList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: { CartListItem },

}
</script>

<style scoped>
#CateGoryList{
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: space-around;
  padding: 2px;
  padding-top: 25px;
}
</style>