<template>
  <div id="home">
    <main-tab-bar id="tab-bar" v-if="this.$route.meta.showTab"></main-tab-bar>
    
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>
<script>
import MainTabBar from "@/components/content/mainTabbar/mainTabbar.vue";
import Home from "@/views/home/Home.vue";
export default {
  name: "App",
  components: {
    MainTabBar,
    Home,
  },
  data() {
    return {
      isShowMBar: {
        type: Boolean,
        default: false
      }
    }
  },
};
</script>

<style>
@import url("./assets/css/base.css");
</style>
