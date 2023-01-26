<template>
  <!-- left side
     -->
  <div class="side-bar" v-if="side === LayoutEnum.sideBar.side.left">
    <div class="main-pages">
      <ul>
        <li class="item">
          <div class="item__icon icon__wrapper">
            <div class="icon icon--24px icon--home center" />
          </div>
          <p class="item__content">Trang chủ</p>
        </li>
        <li class="item">
          <div class="item__icon icon__wrapper">
            <div class="icon icon--24px icon--about center" />
          </div>
          <p class="item__content">Về chúng tôi</p>
        </li>
        <li class="item">
          <div class="item__icon icon__wrapper">
            <div class="icon icon--24px icon--contact center" />
          </div>
          <p class="item__content">Liên hệ</p>
        </li>
        <li class="item">
          <div class="item__icon icon__wrapper">
            <div class="icon icon--24px icon--guide center" />
          </div>
          <p class="item__content">Hướng dẫn</p>
        </li>
      </ul>
    </div>
    <div class="others"></div>
  </div>
  <!-- right side -->
  <div class="side-bar" v-else>
    <div class="side-bar__content">
      <img src="@/assets/img/sidebar/lunar_year.jpg" />
    </div>
  </div>
</template>

<script>
// Resources
import LayoutEnum from "@/assets/js/enum/layout";

export default {
  name: "SideBar",
  created() {},
  components: {},
  props: {
    side: {
      type: Number,
      default: 0,
    }, // Vị trí đặt sidebar
  },
  emits: [],
  methods: {},
  data() {
    return {
      // Resources
      LayoutEnum,
    };
  },
};
</script>

<style scoped>
@import url(@/assets/css/icon.css);
.side-bar {
  position: fixed;
  top: 56px;
  left: 120px;
  width: 20%;
}

.item {
  display: flex;
  align-items: center;
}

.item:hover {
  color: var(--text--hover);
  background-color: var(--wrapper--hover);
  border-radius: 6px;
  cursor: pointer;
}
</style>