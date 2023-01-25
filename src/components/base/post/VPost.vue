<template>
  <div class="post">
    <div class="post__content">
      <div class="post__header">
        <!-- font awesome icon -->
        <div class="post__header__avatar icon__wrapper">
          <font-awesome-icon class="center icon" :icon="['far', 'user']" />
        </div>
        <div class="post__header__info">
          <p class="username">Nguyễn Văn Thịnh</p>
          <p class="time">Ngày 20 tháng 1 (5 ngày trước)</p>
        </div>
      </div>
      <div class="post__body">
        <div class="main-content">
          <h2 class="title">Writing a Great Post Title</h2>
          <p class="description">
            Think of your post title as a super short (but compelling!)
            description — like an overview of the actual post in one short
            sentence. Use keywords where appropriate to help ensure people can
            find your post by search.
          </p>
        </div>
        <div class="tags">
          <a href="" class="tag">#mysql</a>
          <a href="" class="tag">#vue</a>
          <a href="" class="tag">#docker</a>
          <a href="" class="tag">#js</a>
        </div>
      </div>
      <!-- Footer -->
      <div class="post__footer">
        <!-- Left -->
        <div class="post__footer__left">
          <!-- Number of reactions -->
          <div class="post__footer__item">
            <div class="item__icon icon__wrapper">
              <font-awesome-icon class="center icon" :icon="['far', 'heart']" />
            </div>
            <div class="item__content">8 lượt yêu thích</div>
          </div>
          <!-- Number of comments -->
          <div class="post__footer__item">
            <div class="item__icon icon__wrapper">
              <font-awesome-icon
                class="center icon"
                :icon="['far', 'comment']"
              />
            </div>
            <div class="item__content">8 bình luận</div>
          </div>
        </div>
        <!-- Right -->
        <!-- :icon="['far', 'bookmark']" -->
        <div class="post__footer__right">
          <div class="item__icon icon__wrapper" @click="toggle">
            <font-awesome-icon class="center icon" :icon="getIcon()" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThePost",
  created() {},
  components: {},
  props: {
    isSaved: {
      type: Boolean,
      default: false,
    },
  },
  emits: [],
  methods: {
    /**
     * @description Thay đổi icon khi click vào nút lưu
     * @author NVThinh 25/1/2023
     */
    getIcon: function () {
      // Nếu bài post chưa được lưu vào bộ sưu tập
      if (this.data.saved == false) {
        return ["far", "bookmark"];
      } else {
        // Nếu bài post đã được lưu
        return "bookmark";
      }
    },

    /**
     * @description thay đổi chế độ lưu và không lưu bài đăng
     * @author NVThinh 25/1/2023
     */
    toggle: function () {
      this.data.saved = !this.data.saved;
    },
  },
  data() {
    return {
      data: {
        saved: false,
      },
    };
  },
};
</script>

<style scoped>
.post {
  width: 40%;
}

.post__header {
  display: flex;
}

.post__body {
  padding-left: 40px;
}

.main-content + .tags {
  margin-top: 8px;
}

.tag ~ .tag {
  padding-left: 32px;
}

a {
  text-decoration: unset;
}

.post__footer {
  display: flex;
  justify-content: space-between;
  padding-left: 28px;
}

.post__footer__left {
  display: flex;
}

.post__footer__right:hover {
  color: var(--text--hover);
  background-color: var(--wrapper--hover);
  border-radius: 6px;
  cursor: pointer;
}

.post__footer__item {
  display: flex;
  align-items: center;
}
</style>