<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"> </detail-nav-bar>
    <scroll class="detail-content" 
      @scroll="contentScroll"
      :probe-type="3"
       ref="scroll"
    >
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
    </scroll>
    <back-top v-show="isShow" @click="backTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/detailNavBar.vue";
import { getDetail, Goods, Shop, GoodsParam } from "../../network/detail.js";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import BackTop from "../../components/content/backTop/backTop.vue";
import DetailCommentInfo from './childComps/DetailCommentInfo.vue';
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
      commentInfo: {}
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
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      data.cRate !==0 ? this.commentInfo = data.rate.list[0] : data.rate = {};
    });
  },
  mounted() {},
  computed: {},
  methods: {
    contentScroll(position) {
      if (position.y < -1500) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 200)
    }
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
  bottom: 0;
  width: 100%;
}
</style>
