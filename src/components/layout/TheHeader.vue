<template>
  <div class="header">
    <!-- Nội dung header -->
    <div class="header__content">
      <!-- Bên trái -->
      <div class="left">
        <!-- Button -->
        <button class="left__button">DEVELOPER</button>
        <!-- Input -->
        <SearchInput
          class="left__input"
          :placeholder="`${Dictionary.action.search.VN}...`"
        />
      </div>
      <!-- Chưa đăng nhập -->
      <div class="right" v-if="!isAuthorized">
        <!-- Button 1 -->
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
        />
        <!-- font awesome icon -->
        <div class="icon__wrapper">
          <font-awesome-icon class="center icon" :icon="['far', 'bell']" />
        </div>
        <!-- font awesome icon -->
        <div class="icon__wrapper">
          <font-awesome-icon class="center icon" :icon="['far', 'user']" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Components
import SearchInput from "@/components/base/input/VSearchInput.vue";
import SubButton from "@/components/base/button/VSubButton.vue";
// Resources
import Dictionary from "@/assets/js/resources/dictionary";
import Resource from "@/assets/js/resources";

export default {
  name: "TheHeader",
  components: { SearchInput, SubButton },
  created() {},
  props: {},
  emits: [],
  methods: {
    /**
     * @description xử lý sự kiện khi ấn vào nút đăng nhập
     * @author NVThinh 23/1/2023
     */
    handleOnClickLogin: function () {
      this.isAuthorized = true;
      this.$router.push(Resource.routes.login);
    },
  },
  data() {
    return {
      isAuthorized: false, // true nếu người dùng đăng nhập thành công
      // Resources
      Dictionary,
    };
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 56px;
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