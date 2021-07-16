<template>
  <div>
    <nav-bar class="home-bar">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>

    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature></home-feature>
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
    ></tab-control>
  </div>
</template>
  
<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl.vue";

import { getHomeMultidata, getHomeGoods } from "@/network/home-req/home";
import HomeSwiper from "./childCmps/homeSwiper.vue";

import HomeRecommendView from "./childCmps/HomeRecommendView.vue";
import HomeFeature from "./childCmps/HomeFrature.vue";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
    };
  },
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    HomeRecommendView,
    HomeFeature,
    TabControl,
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
    getHomeGoods().then((res) => {
      console.log(res);
    });
  },
};
</script>

<style>
#home {
  padding-top: 44px;
}
.home-bar {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  z-index: 9;
  left: 0;
  top: 0;
  right: 0;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>