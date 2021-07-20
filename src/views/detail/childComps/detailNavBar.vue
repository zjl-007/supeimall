<template>
  <div id="detail-nav-bar">
    <nav-bar>
      <template v-slot:left>
        <div class="back">
          <img
            src="~@/assets/img/common/back.svg"
            alt=""
            @click="backClick()"
          />
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div
            v-for="(item, index) in titles"
            :key="item"
            class="title-item"
            @click="changeIndex(index)"
            :class="{ active: index === currentIndex }"
          >
            {{ item }}
          </div>
        </div>
      </template>
      <template v-slot:right>
        <div></div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";

export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  created() {
    
  },
  components: {
    NavBar,
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style>
#detail-nav-bar {
  border-bottom: 1px solid #ccc;
}

.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back {
  margin-top: 6px;
}
</style>
