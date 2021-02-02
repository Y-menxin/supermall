<template>
  <div>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <MainTabBar class="tabbar"></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from "content/mainTabbar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>

<style scoped>
@import url("assets/css/base.css");
</style>
