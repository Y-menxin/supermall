<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  methods: {
    // 返回顶部
    scrollTo(x, y, time = 300) {
      // 有可能 会出现数据已经加载完成  但是 scroll 还并未初始化的情况所以先进行 判断
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // 下拉加载更多
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    // 计算可滚动区域
    refresh() {
      this.scroll && this.scroll.refresh();
    }
  },
  mounted() {
    // 初始加载时 请求数据需要时间 但 Bscroll已经初始化完成 所以滚动失效 特设置定时器 在 0.8 秒 以后在初始化 Bscroll
    // 但 定时器不是最佳 方案 后续...... 使用 refresh 当数据加载完成后 重新计算可滚动区域
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });

    // 监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", postion => {
        this.$emit("scroll", postion);
      });
    }
    // 监听 scroll 滚动到底部
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  }
};
</script>

<style scoped></style>
