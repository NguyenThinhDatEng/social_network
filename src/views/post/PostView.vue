<template>
  <div class="post__view">
    <!-- Reaction item -->
    <div class="reaction">
      <div class="item">
        <div class="item__icon icon__wrapper">
          <font-awesome-icon class="center icon" :icon="['far', 'heart']" />
        </div>
        <p class="item__quantity">5</p>
      </div>
      <div class="item">
        <div class="item__icon icon__wrapper">
          <font-awesome-icon class="center icon" :icon="['far', 'comment']" />
        </div>
        <p class="item__quantity">5</p>
      </div>
      <div class="item">
        <div class="item__icon icon__wrapper">
          <font-awesome-icon class="center icon" :icon="['far', 'bookmark']" />
        </div>
        <p class="item__quantity">5</p>
      </div>
    </div>
    <!-- Content -->
    <div class="post">
      <!-- Header -->
      <div class="post__header">
        <img src="@/assets/img/view/post/01.webp" alt="" class="post__img" />
        <!-- user information -->
        <div class="post__user-info">
          <!-- font awesome icon -->
          <div class="post__header__avatar icon__wrapper">
            <font-awesome-icon class="center icon" :icon="['far', 'user']" />
          </div>
          <div class="user-info">
            <p class="username">Nguyễn Văn Thịnh</p>
            <p class="time">Ngày 20 tháng 1 (5 ngày trước)</p>
          </div>
        </div>
        <!-- Title of post -->
        <h1 class="title">
          I'm building an open-source VSCode chatbot extension with OpenAI /
          GPT3 in public
        </h1>
        <!-- Tags of post -->
        <div class="post__tags">
          <a href="" class="tag">#mysql</a>
          <a href="" class="tag">#vue</a>
          <a href="" class="tag">#docker</a>
          <a href="" class="tag">#js</a>
        </div>
      </div>
      <!-- content -->
      <div class="post__content">
        You can find the repository here:
        https://github.com/rubberduck-ai/rubberduck-vscode All code will be
        open-source under the MIT license! For updates, you can follow me or
        this thread on Twitter: In the next few days, I'll be building an open
        source chatbot extension for #vscode that uses #OpenAI #GPT. It'll be
        able to explain code, diagnose errors, and more. You can follow along in
        this twitter thread.#buildinpublic pic.twitter.com/EoN664rBkW — Lars
        Grammel (@lgrammel) January 26, 2023
      </div>
      <!-- Comments of post -->
      <div class="post__comment__wrapper">
        <div class="post__comment__header">
          <h3>Bình luận (2)</h3>
        </div>
        <!-- Comments -->
        <TheComment
          v-for="(comment, index) of comments"
          v-bind:key="index"
          class="post__comment"
          :index="index"
          :comment-obj="comment"
          :isReadOnly="isReadOnly(index)"
        />
      </div>
    </div>
  </div>
</template>
  
  <script>
// Components
import TheComment from "@/components/base/post/VComment.vue";

export default {
  name: "VPostRead",
  components: { TheComment },
  created() {},
  props: {},
  emits: [],
  methods: {
    isReadOnly: function (index) {
      return index > 0;
    },
  },
  data() {
    return {
      comments: [
        {},
        {
          id: "01",
          src: "@/assets/img/view/post/01.webp",
          content: "Your post is nice",
        },
      ], // Mảng các comment của bài đăng
    };
  },
};
</script>
  
  <style scoped>
.post__view {
  display: flex;
  justify-content: center;
}

.reaction {
  display: flex;
  flex-direction: column;
}

.post {
  width: 40%;
}

.post__img {
  max-width: 100%;
  margin-bottom: 20px;
}

.post__user-info {
  display: flex;
  margin-bottom: 20px;
}

h1 {
  font-size: 48px;
  margin-top: 0;
  margin-bottom: 20px;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
}

.item ~ .item {
  margin-top: 16px;
}

a + a {
  margin-left: 20px;
}
.post__comment + .post__comment {
  margin-top: 20px;
}

.post__tags {
  margin-bottom: 20px;
}
</style>