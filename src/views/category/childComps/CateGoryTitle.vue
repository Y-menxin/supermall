<template>
  <div id="category-title">
      <div v-for="(item,index) in titleList"
           :key="index" 
           class="cate-title" 
           :class="{active:index === currentIndex}"
           @click="titleClick(index,item.maitKey)">{{item.title}}</div>
  </div>
</template>

<script>
export default {
  name:'CateGoryTitle',
  props: {
    titleList:{
      type:Array,
      default(){
        return  []
      }
    },
  },
  data () {
    return {
    currentIndex:0,
    }
  },
  methods: {
    titleClick(index,maitKey){
     this.currentIndex = index
     this.$emit('titleClick',maitKey)
    },
  }
}
</script>

<style scoped>
#category-title{
  position: relative;
  top: 0px;
  left: 0px;
  width: 25%;
  display: inline-block;
  background-color: rgb(245, 245, 244);
}
.cate-title{
  height: 50px;
  text-align: center;
  line-height: 45px;
}
.active{
  border-left: 4px solid var(--color-high-text);
  color: var(--color-tint);
}
</style>