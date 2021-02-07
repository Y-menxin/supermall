<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav" />
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goodsInfo="goodsInfo" />
      <detail-shop-info :shopInfo="shopInfo" />
      <detail-image-info
        :detailInfo="detailInfo"
        @detaliImgLoad="detaliImgLoad"
      />
      <detail-params-info ref="params" :itemParams="itemParams" />
      <detail-comment-info ref="comment" :rate="rate" />
      <goods-list ref="recommends" :goods="recommends" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <detail-bottom-bar @addToCart="addToCart"/>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailImageInfo from "./childComps/DetailImageInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailParamsInfo from "./childComps/DetailParamsInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from './childComps/DetailBottomBar.vue';

import Scroll from "common/scroll/Scroll.vue";
import GoodsList from "content/goods/GoodsList";

import { getDetail, Goods, getRecommend } from "network/detail";
import { itemListenerMixin, backTopMixin } from "@/common/mixin";
import { debounce } from "@/common/utils";
import { mapActions } from "vuex";

export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImageInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    Scroll,
    GoodsList,
    DetailBottomBar
  },
  mixins: [itemListenerMixin,backTopMixin],
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
      rate: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0
    };
  },
  // 用户离开界面 销毁事件
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
  // 页面 初始化完成后 调用
  mounted() {},
  // 当 vue 实例 创建完成后 立即调用
  created() {
    // 1.保存商品 id
    this.iid = this.$route.params.iid;
    // 2.根据 商品id  请求详细数据
    getDetail(this.iid).then(res => {
      const data = res.result;
      this.topImages = res.result.itemInfo.topImages;
      // 3.创建商品的对象
      this.goodsInfo = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 4.获取店铺信息
      this.shopInfo = data.shopInfo;
      // 5.获取详情的信息
      this.detailInfo = data.detailInfo;
      // 6.获取参数的信息
      this.itemParams = data.itemParams;
      // 5.获取评论的信息
      this.rate = data.rate;
    });
    // 3.请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list;
    });
    // 商品详情数据 与 标题 联动
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      // 获取对应的 高度
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
    }, 200);
  },
  methods: {
    ...mapActions(['addCart']),
    // 商品详情图片加载完毕
    detaliImgLoad() {
      this.getThemeTopY();
      this.refresh();
    },
    // 点击标题 跳转到对应位置
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    // 滚动到 对应位置 标题发生改变
    contentScroll(postion) {
      const postionY = -postion.y;
      const length = this.themeTopYs.length;
      for (let i = 0; i < length - 1; i++) {
        // if (
        //   this.currentIndex !== i &&
        //   ((i < length - 1 &&
        //     postionY >= this.themeTopYs[i] &&
        //     postionY < this.themeTopYs[i + 1]) ||
        //     (i === length - 1 && postionY >= this.themeTopYs[i]))
        // )
        if (
          (this.currentIndex !== i) &&
          (postionY  >= this.themeTopYs[i] && postionY  < this.themeTopYs[i + 1])
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
       // 1.判断 backTop 是否显示
      this.listenShowBtckTop(postion)
    },
    // 将商品添加到购物车 
    // 1.获取商品对应数据
    addToCart(){
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goodsInfo.title
      product.desc = this.goodsInfo.desc
      product.price = this.goodsInfo.realPrice
      product.iid = this.iid

    // 将商品添加到购物车 并显示添加商品成功 弹出消息提示
    // 使用 mapActions + Promise
    this.addCart(product).then(res => {
      this.$toast.show(res)
    })
}
  }
};
</script>

<style scoped>
#detail {
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 12;
}
.content {
  background-color: #fff;
  height: calc(100% - 44px - 49px);
}
</style>
