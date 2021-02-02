<template>
  <div id="detailCommentInfo" v-if="Object.keys(rate).length !== 0">
    <div class="comment-head">
      <div class="head-left">用户评价({{ rate.cRate }})</div>
      <div class="head-right">
        <a href="">更多</a>
      </div>
    </div>
    <div class="comment-user">
      <img :src="rate.list[0].user.avatar" alt="" />
      <span>{{ rate.list[0].user.uname }}</span>
    </div>
    <div class="comment-content">
      <p class="content">{{ rate.list[0].content }}</p>
      <div class="comment-detail">
        <span class="date">{{ rate.list[0].created | showData }}</span>
        <span>{{ rate.list[0].style }}</span>
      </div>
    </div>
    <div class="comment-image">
      <img
        :src="item"
        alt=""
        v-for="(item, index) in rate.list[0].images"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/common/utils";

export default {
  name: "DetailCommentInfo",
  props: {
    rate: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    showData(value) {
      let datd = new Date(value * 1000);
      return formatDate(datd, "yyyy-MM-dd");
    }
  }
};
</script>

<style scoped>
#detailCommentInfo {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}
.comment-head {
  padding: 5px 12px 5px 0px;
  color: #333;
  border-bottom: 3px solid #f2f5f8;
  height: 50px;
  line-height: 50px;
}
.head-left {
  float: left;
}
.head-right {
  float: right;
}
.comment-user {
  padding: 10px 0 5px;
}
.comment-user img {
  height: 45px;
  width: 45px;
  border-radius: 50%;
}
.comment-user span {
  position: relative;
  top: -18px;
  left: 7px;
}
.content {
  line-height: 1.5;
  color: #777;
}
.comment-detail {
  font-size: 13px;
  color: #999;
  margin: 7px 0 12px 0;
}
.comment-detail .date {
  margin-right: 12px;
}
.comment-image img {
  height: 70px;
  width: 70px;
  margin-right: 5px;
}
</style>
