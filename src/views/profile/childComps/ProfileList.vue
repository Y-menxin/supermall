<template>
  <div id="ProfileList">
    <div v-for="(item,index) in list" :key="index" class="list-item">
      <span :class="item.icon" class="icon"></span>
      <span class="text">{{item.info}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'ProfileList',
  props: {
    list:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
#ProfileList{
  color: #333;
}
  .list-item{
    height: 45px;
    text-align: left;
    line-height: 45px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }
  .icon{
    margin: 0px 8px 0px 12px ;
  }
</style>