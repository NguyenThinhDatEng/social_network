<template>
  <!-- Header -->
  <div class="header">
    <!-- Nội dung header -->
    <div class="header__content">
      <!-- Bên trái -->
      <div class="left">
        <!-- Button -->
        <button class="left__button" @click="goHome">DEVELOPER</button>
        <!-- Input -->
        <SearchInput
          class="left__input"
          :placeholder="`${Dictionary.action.search.VN}...`"
        />
      </div>
      <!-- Chưa đăng nhập -->
      <div class="right" v-if="!isAuthorized">
        <!-- Button: Login -->
        <div class="login__wrapper" @click="handleOnClickLogin">
          {{ Dictionary.action.login.VN }}
        </div>
        <!-- Button 2 -->
        <SubButton
          class="right__button"
          :button-content="Dictionary.action.create.account.VN"
        />
      </div>
      <!-- Đã đăng nhập -->
      <div class="right" v-else>
        <!-- Button 1 -->
        <SubButton
          class="right__button"
          :button-content="Dictionary.action.create.post.VN"
          @click="handleOnClickCreatePost"
        />
        <!-- font awesome icon -->
        <div class="icon__wrapper">
          <font-awesome-icon class="center icon" :icon="['far', 'bell']" />
        </div>
        <!-- Avatar -->
        <router-link to="users">
          <!-- font awesome icon -->
          <div class="icon__wrapper">
            <font-awesome-icon class="center icon" :icon="['far', 'user']" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <!-- Popup: Create a new post -->
  <PostDetail v-if="isShowPopup" @close-popup="closePopup" />
</template>

<script>
// Components
import SearchInput from "@/components/base/input/VSearchInput.vue";
import SubButton from "@/components/base/button/VSubButton.vue";
import PostDetail from "@/components/base/post/VPostDetail.vue";
// Resources
import Dictionary from "@/assets/js/resources/dictionary";
import Resource from "@/assets/js/resources";
import { getCookie } from "@/assets/js/common/function";

export default {
  name: "TheHeader",
  components: { SearchInput, SubButton, PostDetail },
  props: {},
  emits: [],

  created() {
    this.authenticateUser();
  },

  methods: {
    /**
     * @description xử lý sự kiện khi ấn vào nút đăng nhập
     * @author NVThinh 23/1/2023
     */
    handleOnClickLogin: function () {
      this.$router.push(Resource.routes.login);
    },

    /**
     * @description Mở popup thêm mới bài đăng
     * @author 28/1/2023
     */
    handleOnClickCreatePost: function () {
      this.openPopup(0);
    },

    /**
     * @description xác thực người dùng
     * @author NVThinh 25/1/2023
     */
    authenticateUser: function () {
      let username = getCookie("username");
      if (username == "TheWill") {
        this.isAuthorized = true;
      } else {
        this.isAuthorized = false;
      }
    },

    /**
     * @description Mở popup
     * @param {Number} mode Chế độ hiển thị popup
     * @author NVThinh 26/1/2023
     */
    openPopup: function (mode) {
      this.mode = mode;
      this.isShowPopup = true;
    },

    /**
     * @description Đóng popup
     * @author NVThinh 26/01/2023
     */
    closePopup: function () {
      this.isShowPopup = false;
    },

    /**
     * @description quay về trang chủ
     * @author 28/1/2023
     */
    goHome: function () {
      this.$router.push("/");
    },
  },
  data() {
    return {
      isShowPopup: false, // Hiển thị popup
      isAuthorized: false, // true nếu người dùng đăng nhập thành công
      mode: 0, // Chế độ hiển thị popup
      // Resources
      Dictionary,
    };
  },
};
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  width: 100%;
  height: 56px;
  background-color: #fff;
  z-index: 2;
}

.header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin: 0 120px;
}

.left,
.right {
  display: flex;
}

.left__button {
  height: 40px;
  border-radius: 6px;
  color: white;
  background-color: #000;
  cursor: pointer;
}

.left__input {
  width: 420px;
}

.left__button + .left__input {
  margin-left: 16px;
}

.login__wrapper {
  height: 40px;
  padding: 8px 16px;
  border-radius: 6px;
  text-align: center;
  line-height: 24px;
  min-width: 104px;
}

.login__wrapper:hover {
  color: var(--text--hover);
  background-color: var(--wrapper--hover);
  cursor: pointer;
}

.right__button {
  width: 140px;
  margin-right: 12px;
}

.icon__wrapper {
  cursor: pointer;
  border-radius: 6px;
}

.icon__wrapper:hover {
  background-color: #ebecfc;
  color: var(--text--hover);
}

.icon {
  font-size: 24px;
}
</style>