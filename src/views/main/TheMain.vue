<template>
  <div class="body">
    <TheHeader />
    <div class="main">
      <TheSidebar />
      <Post />
      <TheSidebar :side="1" />
    </div>
  </div>
</template>

<script>
// Layouts
import TheHeader from "@/components/layout/TheHeader.vue";
import TheSidebar from "@/components/layout/TheSidebar.vue";
// Components
import Post from "@/components/base/post/VPost.vue";

export default {
  name: "App",
  components: { TheHeader, TheSidebar, Post },
};
</script>

<style>
@import url(@/assets/css/base.css);

.main {
  display: flex;
  justify-content: space-evenly;
  background-color: #f5f5f5;
}
</style>