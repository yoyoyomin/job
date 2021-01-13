
<template>
  <div id="app">

 <router-view></router-view>
 
   </div>
</template>
<script>
import home from "./views/Home"
import login from './views/login'


export default {
 
  components:{
    home,
    login
  
  },
  
  data() {
    return {
      collapsed: false,
    };
  },
};

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  text-align: center;
  background-color:  #2c3e50;
  width: 100%;
  height: 100%;
}

</style>
