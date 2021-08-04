<template>
  <div class="goodsListItem" @click="itemClick">
    <img :src="showImage" alt="" @load="imgLoad"/>
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">￥{{ goodsItem.price }}</span>
      <span class="cfav">收藏 {{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
    };
  },
  methods: {
    imgLoad() {
      this.$store.commit({
          type: 'changeImgLoad',
          isValue: true,
      })
    },
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  }
};
</script>

<style>
.goodsListItem {
  width: 48%;
  float: left;
  
  padding-bottom: 15px;
}
.goodsListItem img {
  width: 100%;
  border-radius: 5px;
  height: 216px;
}
.goodsListItem p {
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.goods-info {
  position: relative;
  font-size: 12px;
  text-align: center;
}
.goods-info .price {
  display: inline-block;
  margin-right: 10px;
  margin-top: 5px;
  color: #ff8198;
}
</style>
