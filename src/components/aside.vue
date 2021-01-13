<template>
   <div id = "appaside">
 <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
   <a-menu-item key="1">
<router-link to="/home/homeindex">
  <a-icon type="home" />
  <span>首页</span>
</router-link>
</a-menu-item>
<a-menu-item key="2" >
  <router-link to="/home/zhiwei">
   <a-icon type="tags" />
  <span>职位信息管理</span>
 </router-link>
</a-menu-item>
<a-menu-item key="3">
   <router-link to="/home/user">
  <a-icon type="mail" />
  <span>面试申请处理</span>
 </router-link>
</a-menu-item>
<a-menu-item key="4" >
      <router-link to="/home/career">
  <a-icon type="edit" />
  <span>职位发布</span>
 </router-link>
</a-menu-item>
   
   <a-menu-item key="5">
   <router-link to="/home/company">
     <a-icon type="user" />
     <span>企业信息</span>
   </router-link>
   </a-menu-item>
 </a-menu>
  </div>   
 

</template>

<script>
export default {
    name:'appaside',

}
</script>
<style>
#aside{
  width: 100%;
  height: 100%;
}
</style>

