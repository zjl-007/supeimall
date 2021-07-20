<template>
    <swiper>
      <swiper-item v-for="item in banners" :key="item">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoaded" />
        </a>
      </swiper-item>
    </swiper>
</template>
  
<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  mounted() {
    // console.log(this.banners);
  },
  methods: {
    imgLoaded() {
      this.$emit('swiperImgLoaded')
    }
  }
};
</script>

<style>
</style>