import { debounce } from './utils';
import BackTop from "content/backTop/BackTop.vue";

export const itemListenerMixin = {
  data () {
    return {
      itemImgListener: null,
      refresh: null
    }
  },
  mounted () {
    // 监听 goodsitem 组件中 图片加载完成
    // 使用事件总线 $bus.$on 接收 自定义事件
    this.refresh = debounce(this.$refs.scroll.refresh, 200);
    this.itemImgListener = () => {
      // 当图片加载完成以后 重新计算可滚动区域
      this.refresh();
    };
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  }
}

export const backTopMixin = {
  data () {
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick () {
      // 如果要监听组件的原生事件 比如点击 需要加上 .native 修饰符 才能监听
      // scrollTo(x, y, 时间)
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    listenShowBtckTop (postion) {
      // 1.判断 backTop 是否显示
      this.isShowBackTop = -postion.y > 1000;
    }
  }

}