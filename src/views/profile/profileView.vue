<template>
  <!-- Main -->
  <div class="profile__wrapper">
    <div class="background" />
    <div class="profile">
      <div class="profile__info border">
        <!-- Avatar -->
        <img src="@/assets/img/view/post/01.webp" class="avatar" />
        <div class="info__header">
          <!-- Button: Edit profile -->
          <ButtonMain
            class="button"
            :title="Dictionary.action.edit.profile.VN"
            :button-content="Dictionary.action.edit.profile.VN"
            :type="Enum.Type.Main"
            @click="openPopup"
          ></ButtonMain>
        </div>
        <div class="info__content">
          <h1 class="username">The Will</h1>
          <div class="description">Something...</div>
        </div>
        <div class="info__footer">
          <div class="position">
            <div class="position__title">Giáo dục</div>
            <div class="position__content">Trường đại học bách khoa Hà Nội</div>
          </div>
          <div class="position">
            <div class="position__title">Vị trí</div>
            <div class="position__content">Fresher Web</div>
          </div>
        </div>
      </div>
      <div class="profile_others">
        <div class="others__left">
          <div class="others__skills border">
            <p class="title">Kỹ năng/Ngôn ngữ</p>
            <p>Communication, teamwork, github</p>
          </div>
          <div class="others__reactions border">
            <!-- historical item -->
            <div class="history-item">
              <!-- font awesome icon -->
              <div class="icon__wrapper">
                <font-awesome-icon
                  class="center icon"
                  :icon="['far', 'newspaper']"
                />
              </div>
              <div class="item__content">8 bài viết được xuất bản</div>
            </div>
            <!-- historical item -->
            <div class="history-item">
              <!-- font awesome icon -->
              <div class="icon__wrapper">
                <font-awesome-icon
                  class="center icon"
                  :icon="['far', 'comment']"
                />
              </div>
              <div class="item__content">8 bình luận đã viết</div>
            </div>
          </div>
        </div>
        <div class="others__right">
          <div class="others__post">
            <Post class="my-post" />
            <Post class="my-post" />
            <Post class="my-post" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Popup -->
  <ProfileDetail v-if="isShowPopup" @close-popup="closePopup" />
</template>

<script>
// components
import ButtonMain from "@/components/base/button/ButtonMain.vue";
import Post from "@/components/base/post/VPost.vue";
// resources
import Dictionary from "@/assets/js/resources/dictionary";
import Enum from "@/assets/js/enum";
// views
import ProfileDetail from "@/views/profile/ProfileDetail.vue";

export default {
  name: "ProfileView",
  created() {},
  components: { ButtonMain, Post, ProfileDetail },
  props: {},
  emits: [],
  methods: {
    /**
     * @description Đóng popup
     * @author NVThinh 28/01/2023
     */
    closePopup: function () {
      this.isShowPopup = false;
    },

    /**
     * @description Đóng popup
     * @author NVThinh 28/01/2023
     */
    openPopup: function () {
      this.isShowPopup = true;
    },
  },
  data() {
    return {
      isShowPopup: false, // Hiển thị popup
      // resources
      Dictionary,
      Enum,
    };
  },
};
</script>

<style scoped>
.profile__wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
}

.background {
  position: absolute;
  background-color: black;
  height: 150px;
  width: 100%;
}

.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
}

.profile__info {
  display: flex;
  flex-direction: column;
  height: 300px;
  margin-top: 75px;
  width: 100%;
  z-index: 1;
}

.profile__info.border {
  padding: 20px;
}

.avatar {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8rem;
  height: 8rem;
  border-radius: 100%;
}

.info__header {
  position: relative;
  height: 40px;
}

.info__content {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}

.button {
  position: absolute;
  right: 0;
  top: 0;
}

.info__footer {
  display: flex;
  border-top: 1px solid #afafaf;
  height: 20%;
}

.info__footer .position {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.profile_others {
  display: flex;
}

.profile_others .others__left {
  flex: 1;
  margin-right: 20px;
}

.profile_others .others__right {
  flex: 2;
}

.border {
  border: 1px solid #afafaf;
  border-radius: 6px;
  margin-bottom: 20px;
  padding: 8px;
  background-color: #fff;
}

.title {
  font-weight: 900;
  font-size: 18px;
  padding-bottom: 20px;
}

.history-item {
  display: flex;
  align-items: center;
  width: 100%;
}

.my-post + .my-post {
  margin-top: 20px;
}
</style>