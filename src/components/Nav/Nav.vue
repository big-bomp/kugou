<template>
<div class="nav">
  
  <mt-navbar v-model="selected">
  <mt-tab-item :id="i" v-for="(item,i) in NavRoutes" :key="i" @touchstart.native="gotoCom(item.name)">
    {{item.meta.title}}
  </mt-tab-item>
 
</mt-navbar>

</div>
</template>

<script>
//引入vue
import Vue from 'vue'
// 按需引入组件
import { Navbar, TabItem } from 'mint-ui';
//将组件使用一下
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

import NavRoutes from '@/router/nav.js'
export default {
  data(){
    return{
      selected:0,
      NavRoutes
    }
  },
  methods:{
    gotoCom(name){
      // api发起路由跳转  是什么路由名字就跳到什么组件
      this.$router.push({name})
    }
  }
}
</script>

<style>

</style>