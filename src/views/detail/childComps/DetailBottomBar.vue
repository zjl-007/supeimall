<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCar">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  //监听属性
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {
    addToCar() {
      this.$emit('addToCar')
    }
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmounted() {},
  unmounted() {},
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.bottom-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  z-index: 9;
  display: flex;
}

.bar-item {
  flex: 1;
  display: flex;
  text-align: center;
  font-size: 15px;
}
.bar-item > div {
  flex: 1;
}

.buy,
.cart {
  height: 49px;
  line-height: 49px;
}
.bar-item .cart {
  color: black;
  background-color: yellow;
}
.bar-item .buy {
  color: #fff;
  background-color: pink;
}
.icon {
  display: block;
  width: 22px;
  height: 22px;
}
.service,
.shop,
.select {
  margin: 0 auto;
}
.service {
  background: url("../../../assets/img/detail/detail_bottom.png") 0 -52px;
  background-size: 100%;
}
.shop {
  background: url("../../../assets/img/detail/detail_bottom.png") 0 -98px;
  background-size: 100%;
}
.select {
  background: url("../../../assets/img/detail/detail_bottom.png") 0 -147px;
  background-size: 100%;
}
</style>