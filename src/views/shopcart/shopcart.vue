<template>
  <div>
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>购物车({{ getCartLen }})</div>
      </template>
    </nav-bar>
    <!-- 商品列表 -->

    <cart-list></cart-list>
  </div>
</template>
  
<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import { mapGetters } from "vuex";
import CartList from "./cartComps/cartList.vue";

export default {
  name: "ShopCart",
  data() {
    return {};
  },
  components: { NavBar, CartList },
  computed: {
    //将vuex中的getters解构出来
    ...mapGetters(["getCartLen"]),
    //语法二
    // ...mapGetters({
    //   length: 'getCartLen'
    // })
  },
  methods: {},
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);

  color: #fff;
  font-weight: 400;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 8;
}

</style>>
