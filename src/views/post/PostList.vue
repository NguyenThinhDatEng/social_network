<template>
  <div class="post-list">
    <TheSidebar />
    <div class="posts">
      <div class="filter">
        <div class="filter__left">
          <div class="text__wrapper text">Thích hợp</div>
          <div class="text__wrapper text">Mới nhất</div>
          <div class="text__wrapper text">Xu hướng</div>
        </div>
        <div class="filter__right">
          <div class="text__wrapper text">Tuần</div>
          <div class="text__wrapper text">Tháng</div>
          <div class="text__wrapper text">Năm</div>
          <div class="text__wrapper text">Tất cả</div>
        </div>
      </div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </div>
</template>

<script>
// Layouts
import TheSidebar from "@/components/layout/TheSidebar.vue";
// Components
import Post from "@/components/base/post/VPost.vue";

export default {
  name: "PostList",
  components: { TheSidebar, Post },
  props: {},
  emits: [],
  methods: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.post-list {
  display: flex;
  justify-content: center;
}

.filter {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.filter__left,
.filter__right {
  display: flex;
}

h2 ~ h2 {
  margin-left: 16px;
}

.posts {
  display: flex;
  flex-direction: column;
  width: 40%;
}

.post ~ .post {
  margin-top: 8px;
}

.text {
  font-size: 16px;
}
</style>