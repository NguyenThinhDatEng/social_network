<template>
  <Popup :title="Resource.popup.title.create" @close-popup="closePopup">
    <div class="post-detail" v-click-outside="onClickOutside">
      <div class="add-img">
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
          :button-content="Dictionary.action.add.image.VN"
          @click="$refs.fileInput.click()"
        />
        <img v-if="url" :src="url" class="preview" />
      </div>
      <!-- The title of post -->
      <div class="title">
        <input class="title__input" placeholder="Nhập tiêu đề tại đây..." />
      </div>
      <!-- The tags of post -->
      <div class="add-tags">
        <v-select
          v-model="tagsSelected"
          multiple
          taggable
          placeholder="Thêm tag"
          :options="[
            { label: '#Canada', code: 'ca' },
            { label: '#VietNam', code: 'vn' },
            { label: '#China', code: 'cn' },
            { label: '#America', code: 'us' },
            { label: '#England', code: 'uk' },
          ]"
          :selectable="(option) => tagsSelected.length < 4"
        >
          <template #search="{ attributes, events }">
            <input
              class="vs__search"
              :required="!selected"
              v-bind="attributes"
              v-on="events"
            />
          </template>
        </v-select>
      </div>
      <!-- The content of post -->
      <div class="description">
        <textarea
          class="post__content"
          placeholder="Viết nội dung bài đăng của bạn tại đây..."
        />
      </div>
    </div>
  </Popup>
</template>

<script>
// Components
import Popup from "@/components/base/popup/VPopup.vue";
import SubButton from "@/components/base/button/VSubButton.vue";
// Resources
import Dictionary from "@/assets/js/resources/dictionary";
import Resource from "@/assets/js/resources";

export default {
  name: "PostDetail",
  components: { Popup, SubButton },

  created() {},
  props: {},
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
     * @description Cập nhật file được chọn
     * @author NVThinh 26/1/2023
     */
    handleOnClickAddImage: function (e) {
      this.selectedFile = e.target.files[0];
      this.url = URL.createObjectURL(this.selectedFile);
      console.log(this.selectedFile);
    },

    onUpload: function () {},

    onClickOutside() {
      this.closePopup();
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
.button {
  width: 140px;
  margin-right: 12px;
}

.add-img,
.title,
.add-tags {
  margin-bottom: 16px;
}

.post-detail .title {
  font-family: T Bold;
}

.preview {
  max-width: 100%;
  max-height: 200px;
}

.title__input,
.tags__input {
  font-size: 40px;
  border: none;
  outline: none;
}

.tags__input {
  font-size: 15px;
}

.post__content {
  width: 100%;
  height: 250px;
  outline: none;
  border: 1px solid #afafaf;
  border-radius: 4px;
  padding: 8px;
}

.post__content::placeholder {
  font-size: 18px;
}
</style>