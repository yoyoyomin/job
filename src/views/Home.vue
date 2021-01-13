<template>
<div class="home">
 <a-layout id="components-layout-demo-custom-trigger">
   <a-layout-sider class = "aside" v-model="collapsed" :trigger="null" collapsible>
  <div class="logo" >
 {{collapsed ? '智招':'智能招聘'}}
  </div>
  <appaside></appaside>
</a-layout-sider>
   <a-layout>
     <a-layout-header style="background: #fff; padding: 0">
       <a-icon
         class="trigger"
         :type="collapsed ? 'menu-unfold' : 'menu-fold'"
         @click="() => (collapsed = !collapsed)"
       />
         <a-dropdown class = 'yuangong'>
         <a class="ant-dropdown-link" @click="e => e.preventDefault()">
           xxxxx<a-icon type="down" />，欢迎
         </a>
           <a-menu slot="overlay">
            <a-menu-item>
            <a href="javascript:;">修改密码</a>
           </a-menu-item>
          <a-menu-item>
           <router-link to="/login">
           <a href="javascript:;">退出登录</a>
           </router-link>

         </a-menu-item>
       </a-menu>
         </a-dropdown>
     </a-layout-header>
     <div class = "maincontent">
    <a-layout-content
  
      :style="{ margin: '24px 16px', padding: '24px', background: '#fff',minHeight: '600px'  }"
    >
      <router-view></router-view>
    </a-layout-content>
     </div>
   </a-layout>
 </a-layout>
</div>
</template>
<script>

import appaside from "../components/aside"

export default {
  name:'home',
  components:{
    appaside
  
  },
  data() {
    return {
      collapsed: false,
      user:'李雷'
    };
  },
   methods: {
    
    
    
 },
};
</script>
<style>
.home{
  height: 100%;
  width: 100%;
}
#components-layout-demo-custom-trigger{
  height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  float: left;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
#components-layout-demo-custom-trigger .yuangong{
  text-align: center;
  line-height: 64px;
  float: right;
  padding: 0 24px;

  
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  color:#fff;
  text-align:center;
  line-height: 32px;
}


</style>
