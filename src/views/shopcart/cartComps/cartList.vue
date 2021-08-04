<template>
  <scroll class="scroll-content" ref="scroll">
    <cart-list-item
      v-for="(item, index) in cartList"
      :key="index"
      :itemInfo="item"
      class="cart-list"
    ></cart-list-item>
  </scroll>
</template>

<script>
import { mapGetters } from "vuex";
import CartListItem from "./CartListItem.vue";
import Scroll from "../../../components/common/scroll/Scroll.vue";
export default {
  name: "CartList",
  components: {
    CartListItem,
    Scroll,
  },
  data() {
    return {};
  },
  //监听属性
  computed: {
    ...mapGetters(["getCartList"]),
    cartList() {
      return this.$store.getters.getCartList;
    },
  },
  //监控data中的数据变化
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  activated() {
    this.$refs.scroll.scroll.refresh();
  }, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.cart-list {
  width: 100%;
}
.scroll-content {
  position: fixed;
  bottom: 49px;
  width: 100%;
}
</style>