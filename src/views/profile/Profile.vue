<template>
  <div id="Profile">
    <navbar>
      <div slot="center">
        个人中心
      </div>
    </navbar>
    <user-info/>
    <profile-account/>
    <profile-list :list='this.orderList' class="list1"/>
    <profile-list :list='this.serviceList'/>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar.vue'
import UserInfo from "./childComps/UserInfo";
import ProfileAccount from './childComps/ProfileAccount.vue';
import ProfileList from './childComps/ProfileList.vue';
export default {
  name: 'Profile',
  components: { 
    Navbar,
    UserInfo,
    ProfileAccount,
    ProfileList
  },
  data () {
    return {
      orderList: [
          {icon: 'iconfont icon-wodexiaoxi', iconColor: '#ff8198', info: '我的消息'},
          {icon: 'iconfont icon-jifenshangcheng', iconColor: '#fc7b53', info: '积分商城'},
          {icon: 'iconfont icon-huangguan', iconColor: '#ffc636', info: '会员卡'},
        ],
        serviceList: [
          {icon: 'iconfont icon-gouwuche', iconColor: '#ff8198', info: '我的购物车'},
          {icon: 'iconfont icon-gouwu', iconColor: '#ff8198', info: '下载购物APP'},
        ]
    }
  }
}
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}
.list1{
    border-bottom: 15px solid #f2f5f8;
}
</style>
