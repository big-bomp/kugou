<template>
  <div id="app">
    <!-- 头部区域 -->
    <header>
      <mt-header title="">
        <router-link to="/" slot="left">
          <mt-button class="logo_icon"></mt-button>
        </router-link>
        <mt-button icon="search" slot="right" @touchstart.native="gotoSearch"></mt-button>
      </mt-header>

      <!-- 具名路由视图 -->
      <router-view name="nav"></router-view>
    </header>

    <!-- 内容区域 -->
    <div class="container">
      <!-- 默认路由视图 -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Header, Button } from "mint-ui";

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);


export default {
  methods:{
    gotoSearch(){
      //去搜索区域
      this.$router.push({path:'/search'})
    }
  }
};
</script>

<style lang="less">
.mint-header {
  .mint-header-button {
    .logo_icon {
       width: 6.375rem;
      height: 1.5rem;
      background: url(./assets/img/logo.png)no-repeat;
      background-size: 100% 100%;
    }
  }
  .mintui-search{
    font-size: 1.125rem;
  }
}
</style>
