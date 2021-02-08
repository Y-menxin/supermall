<template>
  <div id="Category">
    <navbar>
       <div slot="center">商品分类</div>
    </navbar>
    <scroll class="content1" ref="scroll1" :isBounce='false'>
      <cate-gory-title :titleList='cateGoryList' @titleClick='titleClcik'/>
    </scroll>
    <scroll class="content2" ref="scroll2">
      <cate-gory-list :subCateGoryList='subCateGoryList'/>
    </scroll>
  </div>
</template>

<script>
import Navbar from 'common/navbar/Navbar.vue'
import CateGoryList from 'content/cateGorys/CateGoryList.vue';

import CateGoryTitle from './childComps/CateGoryTitle.vue';

import Scroll from 'components/common/scroll/Scroll.vue';

import { getcategory, getSubcategory } from "network/category.js";
import { debounce } from "@/common/utils";



export default {
  name: "Category",
  data () {
    return {
      cateGoryList:[],
      subCateGoryList:[],
      maitKey:0,
      itemImgListener:null,
    }
  },
  components: { 
    Navbar,
    CateGoryTitle,
    Scroll,
    CateGoryList,
  },
  // 当 vue 实例 创建完成后 立即调用
  created () {
    // 获取分类标题数据
      getcategory().then(res=>{
        // 获取 分类标题数据
        this.cateGoryList = res.data.category.list
        // 先获取第一个分类的 maitKey
        this.maitKey = this.cateGoryList[0].maitKey
        // 获取 第一个分类的数据
        this.getSubcategorys()
    })

  },
  // 页面处于活动状态 执行
  activated () {
    // 用 防抖函数 对 refresh(重新计算可滚动高度) 进行包装
    let refresh1 = debounce(this.$refs.scroll1.refresh, 200)
    let refresh2 = debounce(this.$refs.scroll2.refresh, 200)
    this.itemImgListener = () => {
      refresh1()
      refresh2()
    }
    // 使用 事件总线的方式 来接收 图片加载完毕 发送的时间
    this.$bus.$on('imgLoad',this.itemImgListener)
  },
 deactivated () {
  //  当页面处于不活动状态 销毁 imgLoad 事件
    this.$bus.$off('imgLoad',this.itemImgListener)
 },
  methods: {
  // 点击标题 拿到对应的数据 
   titleClcik(maitKey){
    //  获取对应的  maitKey
    this.maitKey = maitKey
    // 根据对应的 maitKey 获取数据
    this.getSubcategorys()
   },
  //  根据 maitKey 获取数据
   getSubcategorys(){
      getSubcategory(this.maitKey).then(res=>{
        this.subCateGoryList = res.data.list
    })
   },
   
  }
};
</script>

<style scoped>
#Category{
 height: 100vh;
 background-color: #fff;
 position: relative;
}
.content1{
  background-color: #fff;
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.content2{
  width: 74%;
  position: relative;
  top: -573px;
  right: -95px;
  overflow: hidden;
  background-color: #fff;
  height: calc(100% - 44px - 49px);
}
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
