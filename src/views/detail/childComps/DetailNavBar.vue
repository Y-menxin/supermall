<template>
  <div>
    <navbar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in title" 
        :key="item.title" 
        class="title-item" 
        :class="{active:index===currentIndex}" 
        @click="titleClick(index)">{{ item }}</div>
      </div>
    </navbar>
  </div>
</template>

<script>
import Navbar from "common/navbar/Navbar";
export default {
  name: "DetailNavBar",
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex:0
    };
  },
  components: {
    Navbar
  },
  methods:{
    titleClick(index){
      this.currentIndex = index
      this.$emit('titleClick',index)
    },
    backClick(){
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
.nav-bar{
    position: relative;
  z-index: 10;
  background-color: #fff;
}
.title{
  display: flex;
  font-size: 14px;
}
.title-item{
  flex: 1;
}
.active{
  color: var(--color-high-text);
}
.back img{
  margin-top:12px;
}
</styless>
