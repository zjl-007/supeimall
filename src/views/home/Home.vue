<template>
  <div>
    <nav-bar class="home-bar">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>

    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabclick="tabClick"
      ref="tabControl"
      :class="{ fixed: isTabFixed }"
    ></tab-control>

    <scroll
      class="scroll-content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperImgLoaded="swiperImgLoaded"
      ></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature></home-feature>
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabclick="tabClick"
        ref="tabControl"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>
  
<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl.vue";
import GoodList from "@/components/content/goods/GoodsList";

import Scroll from "@/components/common/scroll/Scroll.vue";
import { getHomeMultidata, getHomeGoods } from "@/network/home-req/home";
import HomeSwiper from "./childCmps/homeSwiper.vue";
import HomeRecommendView from "./childCmps/HomeRecommendView.vue";
import HomeFeature from "./childCmps/HomeFrature.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import BackTop from "../../components/content/backTop/backTop.vue";
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
      currentType: "pop",
      isShow: false,
      isTabFixed: false,
      tabOffsetTop: 0,
      saveY: 0,
    };
  },
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    HomeRecommendView,
    HomeFeature,
    TabControl,
    GoodList,
    GoodsList,
    Scroll,
    BackTop,
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 1);
    this.$refs.scroll.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
    this.$refs.scroll.scroll.refresh();
  },
  unmounted() {
    console.log("删除组件");
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  watch: {
    //观察图片是否加载完成
    scrollFresh() {
      //如果值改变表示加载完成
      function refresh() {
        this.$store.state.isImgLoadCom = false;
        this.$refs.scroll.scroll.refresh();
      }
      //加载防抖函数
      const res = this.debounce(refresh, 200);
      res();
    },
  },

  computed: {
    //计算goods数据
    showGoods() {
      return this.goods[this.currentType].list;
    },
    //获取图片是否加载完成
    scrollFresh() {
      return this.$store.state.isImgLoadCom;
    },
  },
  mounted() {},
  methods: {
    debounce(fn, wait) {
      let timer = null;
      let that = this;
      return function () {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          fn.call(that);
        }, wait);
      };
    },
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      //每次获取数据将页面值加一，同时保存当前页
      const page = ++this.goods[type].page;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.$refs.scroll.finishPullUp();
      });
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      if (position.y < -800) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
      if (position.y < -this.tabOffsetTop) {
        this.isTabFixed = true;
      } else {
        this.isTabFixed = false;
      }
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperImgLoaded() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
  },
};
</script>

<style>
.home-bar {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  z-index: 9;
  left: 0;
  top: 0;
  right: 0;
}

.scroll-content {
  position: fixed;
  top: 44px;
  bottom: 49px;
  width: 100%;
}
.fixed {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 6;
}
</style>