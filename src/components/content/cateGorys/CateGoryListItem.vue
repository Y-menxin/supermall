<template>
  <div id="CateGoryListItem">
    <div class="list-item">
      <a :href="listItem.link" class="image">
        <img v-lazy="listItem.image" alt="" @load="imgLoad">
      </a>
      <p class="title">{{listItem.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'CateGoryListItem',
  props: {
    listItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    imgLoad(){
      this.$bus.$emit('imgLoad')
    }
  }
}
</script>

<style scoped>
.image img{
  height: 95px;
  width: 95px;
}
.list-item{
  text-align: center;
}
</style>