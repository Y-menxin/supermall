<template>
  <div id="Toast" v-show='isShow'>
      <div>{{this.message}}</div>
  </div>
</template>

<script>
export default {
  name:'Toast',
data () {
  return {
    message:'',
    isShow:false
  }
},
methods: {
  show (message, time = 2000){
    this.isShow = true
    this.message = message

    setTimeout(() => {
      this.isShow = false
      this.message = ' '
    }, time);
  }
}
}
</script>

<style scoped>
#Toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: #fff;
  background-color: rgba(0, 0, 0, .75);
  padding: 8px 8px;
  z-index: 9999;
}
</style>