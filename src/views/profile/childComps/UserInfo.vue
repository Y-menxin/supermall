<template>
  <div id="UserInfo">
    <div class="info">
      <div class="icon">
        <img src="~assets/img/profile/user.png" alt="">
      </div>
      <div class="login">
        <span>
          <p class="text1">登录/注册</p>
          <p class="text2">暂未绑定手机号码</p>
        </span>
      </div>
      <div class="btn">
          <img src="~assets/img/common/back.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'UserInfo'
}
</script>

<style scoped>
#UserInfo{
  background-color: var(--color-tint);
  color: #fff;
  padding: 10px 8px;
}
.info{
  display: flex;
}
.info .icon {
  flex: 1;
  text-align: center
}
.info .icon img{
  height: 85px;
  width: 85px;
  border-radius: 50%;
}
.info .login{
  flex: 2;
  position: relative;
}
.info .login span{
  position: absolute;
  top: 25px;
  left: 15px;
}
.text1{
  font-size: 19px;
  margin-bottom: 5px;
}
.text2{
  font-size: 14px;
}
.text2::before{
  content: " ";
  background: url("~assets/img/profile/phon.png") no-repeat;
  height: 18px;
  width: 18px;
  display: inline-block;
  background-size: contain;
  position: relative;
  top: 4px;
}
.info .btn{
  flex: 1;
  position: relative;

}
.info .btn img{
  transform: rotateY(180deg);
  position: absolute;
  top: 35px;
  right: 0px;
}
</style>