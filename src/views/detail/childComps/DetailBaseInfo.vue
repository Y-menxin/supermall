<template>
  <div id="detail-base-info" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="title">{{ goodsInfo.title }}</div>
    <div class="price">
      <span>{{ goodsInfo.price }}</span>
      <span>{{ goodsInfo.oldPrice }}</span>
      <span class="discount">{{ goodsInfo.discountDesc }}</span>
    </div>
    <div class="info-other">
      <span>{{ goodsInfo.columns[0] }}</span>
      <span>{{ goodsInfo.columns[1] }}</span>
      <span>{{ goodsInfo.services[goodsInfo.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span v-for="index in goodsInfo.services.length - 1" :key="index">
        <img :src="goodsInfo.services[index - 1].icon" alt="" />
        <span>{{ goodsInfo.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
#detail-base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.title {
  font-weight: 700;
  font-size: 14px;
  overflow: hidden;
  color: #222;
}
.price {
  margin: 15px 0px 7px 0px;
}
.price > span:nth-child(1) {
  color: var(--color-high-text);
  font-size: 24px;
}
.price > span:nth-child(2) {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.info-other {
  display: flex;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  justify-content: space-between;
  padding-bottom: 7px;
}
.info-other span {
  flex: 1;
}
.info-other span:nth-child(1) {
  text-align: left;
}
.info-other span:nth-child(2) {
  text-align: center;
}
.info-other span:nth-child(3) {
  text-align: right;
}
.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.info-service img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}

.info-service span {
  font-size: 12px;
  color: #333;
}
.discount {
  display: inline-block;
  border-radius: 10px;
  color: #f2f5f8;
  background-color: var(--color-high-text);
  margin-left: 5px;
  font-size: 13px;
  padding: 2px;
  position: relative;
  top: -6px;
}
</style>
