<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.index" :goodsItem="item">
      
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue"
export default {
  name: 'GoodList',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  },
}
</script>

<style>
.goods {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 5px;
}
</style>
