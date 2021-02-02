<template>
  <div id="detailShopInfo">
    <div class="shopInfo-top">
      <img :src="shopInfo.shopLogo" alt="" />
      <span class="title">{{ shopInfo.name }}</span>
    </div>

    <div class="shopInfo-sells">
      <div class="shopInfo-left shopInfo-item">
        <div class="goods-sell count">
          <div class="sells-count">
            {{ shopInfo.cSells | sellCountFilter }}
          </div>
          <div class="sells-text text">总销量</div>
        </div>
        <!--  -->
        <div class="info-goods">
          <div class="goods-count count">
            {{ shopInfo.cGoods }}
          </div>
          <div class="goods-text text">全部宝贝</div>
        </div>
      </div>
      <!--  -->
      <div class="shopInfo-right shopInfo-item">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShoopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    sellCountFilter(value) {
      let result = value;
      if (value > 10000) {
        result = (result / 10000).toFixed(1) + "万";
      }
      return result;
    }
  }
};
</script>

<style scoped>
#detailShopInfo {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}

.shopInfo-top {
  line-height: 45px;
  /* 让元素垂直中心对齐 */
  display: flex;
  align-items: center;
}
.shopInfo-top img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.shopInfo-top .title {
  margin-left: 7px;
  font-weight: 700;
}
.shopInfo-sells {
  display: flex;
  margin-top: 10px;
}
.shopInfo-item {
  flex: 1;
}
.shopInfo-left {
  display: flex;
  margin-top: 15px;
}
.score-better {
  color: #f13e3a;
}
.goods-sell {
  flex: 1;
  text-align: center;
}
.info-goods {
  flex: 1;
  text-align: center;
}
.count {
  font-size: 20px;
}
.text {
  font-size: 14px;
  margin-top: 5px;
}
.shopInfo-right {
  font-size: 13px;
  color: #333;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}
.shopInfo-right table {
  width: 120px;
  margin-left: 14%;
}
.score {
  color: #5ea732;
}
.score-better {
  color: #f13e3a;
}
.better span {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}
.better-more span {
  background-color: #f13e3a;
}
.shopInfo-right table td {
  padding: 5px 0;
}
.shop-bottom {
  text-align: center;
  margin-top: 10px;
}

.enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>
