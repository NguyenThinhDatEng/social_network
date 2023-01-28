<template>
  <Popup
    class="edit-popup"
    :title="Dictionary.action.edit.profile.VN"
    @close-popup="closePopup"
  >
    <div class="profile-detail" v-click-outside="onClickOutside">
      <div class="user border">
        <h2 class="title">Thông tin người dùng</h2>
        <VInput />
        <VInput />
        <div class="showEmail">
          <input type="checkbox" />
          <p>Hiển thị email trên hồ sơ</p>
        </div>
        <VInput />
        <div class="profile__image">
          <img src="@/assets/img/view/login-background.png" class="avatar" />
          <!-- input -->
          <input
            type="file"
            style="display: none"
            ref="fileInput"
            accept="image/*"
            @change="handleOnClickAddImage"
          />
          <!-- Button 1 -->
          <SubButton
            v-if="!url"
            class="button"
            :button-content="Dictionary.action.change.image.VN"
            @click="$refs.fileInput.click()"
          />
        </div>
      </div>
      <div class="basic border">
        <h2 class="title">Thông tin cơ bản</h2>
        <textarea />
      </div>
      <div class="coding border">
        <h2 class="title">Kỹ năng lập trình</h2>
        <div class="v-textarea">
          <label>Các kỹ năng / ngôn ngữ</label>
          <div class="description"></div>
          <textarea />
        </div>
      </div>
      <div class="work border">
        <h2 class="title">Thông tin công việc</h2>
        <VInput />
        <VInput />
      </div>
    </div>
  </Popup>
</template>
  
  <script>
// Components
import Popup from "@/components/base/popup/VPopup.vue";
import VInput from "@/components/base/input/VInput.vue";
import SubButton from "@/components/base/button/VSubButton.vue";
// Resources
import Dictionary from "@/assets/js/resources/dictionary";
import Resource from "@/assets/js/resources";

export default {
  name: "ProfileDetail",
  components: { Popup, VInput, SubButton },
  emits: ["close-popup"],

  methods: {
    /**
     * @description Đóng popup
     * @author NVThinh 26/01/2023
     */
    closePopup: function () {
      this.$emit("close-popup");
    },

    /**
     * @description Đóng popup khi click ra ngoài post
     * @author NVThinh 26/1/2023
     */
    onClickOutside: function () {
      this.closePopup();
    },

    /**
     * @description Cập nhật file được chọn
     * @author NVThinh 28/1/2023
     */
    handleOnClickAddImage: function (e) {
      this.selectedFile = e.target.files[0];
      this.url = URL.createObjectURL(this.selectedFile);
      console.log(this.selectedFile);
    },
  },
  data() {
    return {
      isShowPopup: false, // Hiển thị popup
      selectedFile: null, // file được lựa chọn
      tagsSelected: [], // Mảng các tag được chọn
      url: "", // okla
      // Resources
      Dictionary,
      Resource,
    };
  },
};
</script>
  
  <style scoped>
@import url(@/assets/css/base/post.css);

.user {
  margin-top: 20px;
}

.showEmail {
  display: flex;
  padding-bottom: 20px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
}

.profile__image {
  display: flex;
}

.border {
  border: 1px solid #afafaf;
  border-radius: 6px;
  margin-bottom: 20px;
  padding: 8px;
}
</style>