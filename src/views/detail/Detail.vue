<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav"
      ref="detailNavBar"
      @titleClick="titleClick()"
    >
    </detail-nav-bar>
    <scroll
      class="detail-content"
      @scroll="contentScroll"
      :probe-type="3"
      ref="scroll"
    >
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
      <detail-param-info
        ref="params"
        :paramInfo="paramInfo"
      ></detail-param-info>
      <detail-comment-info
        :commentInfo="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <goods-list
        ref="recommend"
        :goods="recommends"
        @detailImageLoad="detailImageLoad"
      ></goods-list>
    </scroll>
    <back-top v-show="isShow" @click="backTop"></back-top>
    <detail-bottom-bar @addToCar="addToCar"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/detailNavBar.vue";
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "../../network/detail.js";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import BackTop from "../../components/content/backTop/backTop.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";


export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      isShow: false,
      commentInfo: {},
      skuInfo: {},
      recommends: {},
      themeTopY: [],
      currentIndex: null,
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    BackTop,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.skuInfo = data.skuInfo;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      this.commentInfo = {};
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
    this.$nextTick(() => {
      setTimeout(() => {
        this.themeTopY.push(0);
        this.themeTopY.push(this.$refs.params.$el.offsetTop);
        this.themeTopY.push(this.$refs.comment.$el.offsetTop);
        this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopY.push(Number.MAX_VALUE);
      }, 500);
    });
  },
  mounted() {},
  updated() {},
  computed: {},
  methods: {
    contentScroll(position) {
      if (position.y < -1500) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
      const positionY = -position.y;
      for (let i = 0; i < this.themeTopY.length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopY[i] &&
          positionY < this.themeTopY[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.detailNavBar.currentIndex = this.currentIndex;
        }
      }
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 200);
    },
    titleClick() {
      let index = this.$refs.detailNavBar.currentIndex;
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 500, this.isScroll);
    },
    detailImageLoad() {
      console.log("detailImageLoad");
    },
    addToCar() {
      const productObj = {};
      productObj.image = this.topImages[0];
      productObj.title = this.goods.title;
      productObj.desc = this.goods.desc;
      productObj.price = this.goods.oldPrice;
      productObj.iid = this.$route.params.iid;
      this.$store.dispatch("addCartList", productObj);
    },
  },
};
</script>

<style>
.detail-nav {
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
}
#detail {
  position: relative;
  z-index: 8;
  background-color: #fff;
  padding-top: 44px;
}
.detail-content {
  overflow: hidden;
  z-index: 6;
  position: fixed;
  top: 44px;
  bottom: 49px;
  width: 100%;
}
</style>
