<template>
  <Swiper>
    <SwiperItem v-for="item in banners" :key="item.acm">
      <a :href="item.link"></a>
      <img :src="item.image" @load="imgLoad" />
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoad() {
      // 只执行 一次 不需要重复发送 事件
      if (!this.isLoad) this.$emit("swiperImgLoad");
      this.isLoad = true;
    }
  }
};
</script>

<style scoped></style>
