<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">购物街</div></navbar>
    <TabControl
      :titles="['流行', '新款', '精选']"
      @tabclick="tabclick"
      ref="tabControl1"
      v-show="isTabFixed"
    />
    <Scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      @pullingUp="loadMore"
      :probeType="3"
      :pullUpLoad="true"
    >
      <HomeSwiper
        :banners="banners"
        @swiperImgLoad="swiperImgLoad"
      ></HomeSwiper>
      <RecommendView :recommends="recommends"></RecommendView>
      <FeatureView />
      <TabControl
        :titles="['流行', '新款', '精选']"
        @tabclick="tabclick"
        ref="tabControl2"
        :v-show="isTabFixed"
      />
      <GoodsList :goods="showGoods" />
    </Scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import Navbar from "common/navbar/Navbar";
import Scroll from "common/scroll/Scroll";
import TabControl from "content/tabControl/TabControl";
import GoodsList from "content/goods/GoodsList";
import BackTop from "content/backTop/BackTop.vue";

import { getHomeMultidata, getHomrGoods } from "network/home.js";
import { backTopMixin } from "@/common/mixin";
// import { itemListenerMixin } from "@/common/mixin";
import { debounce } from "@/common/utils";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      tabOffsetTop: 0,
      isTabFixed: false,
      itemImgListener: null
    };
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList,
    Navbar,
    TabControl,
    Scroll,
    BackTop
  },
  // mixins: [itemListenerMixin],
  mixins: [backTopMixin],
  // 当 vue 实例 创建完成后 立即调用
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    // 请求商品数据
    this.getHomrGoods("pop");
    this.getHomrGoods("new");
    this.getHomrGoods("sell");
  },
  // 只有 被 keep-alive 缓存的组件才能使用
  // 当 组件不处于 活动状态 销毁事件
  deactivated() {
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
  // 当组件处于 活动状态 重新调用事件
  activated() {
    // 监听 goodsitem 组件中 图片加载完成
    // 使用事件总线 $bus.$on 接收 自定义事件
    let refresh = debounce(this.$refs.scroll.refresh, 200);
    this.itemImgListener = () => {
      // 当图片加载完成以后 重新计算可滚动区域
      refresh();
    };
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  },
  methods: {
    // ---- 网络请求相关的方法 ----
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomrGoods(type) {
      // 当前数据请求完 以后 让页码 +1 请求新的数据
      const page = this.goods[type].page + 1;
      getHomrGoods(type, page).then(res => {
        // 利用 剩余运算符 将数据 追加 到 数组中
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 完成下拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
    // ---- 事件监听相关的方法 ----
    // TabControl 切换事件
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 回到顶部
    
    // 显示与隐藏 backTop 组件
    contentScroll(postion) {
      // 1.判断 backTop 是否显示
      this.listenShowBtckTop(postion)
      // 2.决定 tabControl 是否吸顶(position:fixed)
      this.isTabFixed = -postion.y > this.tabOffsetTop;
    },
    // 下拉加载更多
    loadMore() {
      this.getHomrGoods(this.currentType);
    },
    // 获取 tabControl的 offsetTop
    swiperImgLoad() {
      // 所有的组件 都有一个属性 $el 用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }
  },
  computed: {
    // 根据 cuuentType 显示对应的数据
    showGoods() {
      return this.goods[this.currentType].list;
    }
  }
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
/* .content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
} */
.content {
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>
