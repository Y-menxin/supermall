<template>
  <div class="goods">
    <GoodsListItem v-for="item in goods" :key="item.acm" :goodsItem="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListIem";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>
