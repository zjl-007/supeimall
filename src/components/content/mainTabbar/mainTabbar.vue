<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <template v-slot:item-icon>
          <img slot="item-icon" src="@/assets/img/tabbar/home.svg" />
        </template>
        <template v-slot:item-icon-active>
          <img
            slot="item-icon-active"
            src="@/assets/img/tabbar/home_active.svg"
          />
        </template>
        <template v-slot:item-text>
          <div slot="item-text">首页</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/category" activeColor="blue">
        <template v-slot:item-icon>
          <img slot="item-icon" src="@/assets/img/tabbar/category.svg" />
        </template>
        <template v-slot:item-icon-active>
          <img
            slot="item-icon-active"
            src="@/assets/img/tabbar/category_active.svg"
          />
        </template>
        <template v-slot:item-text>
          <div slot="item-text">分类</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/shopcart" activeColor="blue">
        <template v-slot:item-icon>
          <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" />
        </template>
        <template v-slot:item-icon-active>
          <img
            slot="item-icon-active"
            src="@/assets/img/tabbar/shopcart_active.svg"
          />
        </template>
        <template v-slot:item-text>
          <div slot="item-text">购物车</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/profile" activeColor="blue">
        <template v-slot:item-icon>
          <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" />
        </template>
        <template v-slot:item-icon-active>
          <img
            slot="item-icon-active"
            src="@/assets/img/tabbar/profile_active.svg"
          />
        </template>
        <template v-slot:item-text>
          <div slot="item-text">我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar.vue";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>