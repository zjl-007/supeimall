<template>
  <div id="home">
    <main-tab-bar id="tab-bar"></main-tab-bar>
    <router-view></router-view>
  </div>
  
</template>
<script>
import MainTabBar from '@/components/content/mainTabbar/mainTabbar.vue'
export default {
  name: 'App',
  components: {
    MainTabBar,
  }
}
</script>

<style>
  @import url('./assets/css/base.css');
</style>
