<template>
  <div class="body">
    <TheHeader />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";

export default {
  name: "App",
  components: { TheHeader },
};
</script>

<style>
@import url(@/assets/css/base.css);

.main {
  background-color: #f5f5f5;
  height: 100%;
}
</style>