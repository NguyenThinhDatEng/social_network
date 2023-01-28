<template>
  <div class="comment__wrapper">
    <div class="comment__content">
      <div class="comment">
        <!-- avatar -->
        <img src="@/assets/img/view/post/01.webp" class="avatar" />
        <!-- content -->
        <textarea
          rows="3"
          placeholder="Thêm bình luận..."
          v-model="data.content"
          :readonly="isReadOnly"
          @click="onClickInput()"
          v-click-outside="onClickTextOutside"
        />
        <!-- Features -->
        <div class="comment__footer" v-if="showButton()">
          <ButtonMain
            class="button"
            :title="Title.save"
            :button-content="Resource.ButtonContent.save"
            :type="Enum.Type.Main"
            @click="$emit('on-save')"
          ></ButtonMain>
          <ButtonMain
            class="button"
            :title="Title.cancel"
            :button-content="Resource.ButtonContent.cancel"
            :type="Enum.Type.Secondary"
            @click="close()"
            @keydown.tab="$emit('on-tab')"
          ></ButtonMain>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// components
import ButtonMain from "@/components/base/button/ButtonMain.vue";
// resources
import Resource from "@/assets/js/resources";
import Enum from "@/assets/js/enum";

export default {
  name: "VComment",
  components: {
    ButtonMain,
  },
  props: {
    index: {
      type: Number,
      default: 0,
    }, // Chỉ số của comment
    commentObj: {
      type: Object,
      default: () => {},
    }, // Đối tượng chứa các thuộc tính của comment
    isReadOnly: {
      type: Boolean,
      default: false,
    },
  },
  emits: [],

  created() {
    this.data = Object.assign(this.commentObj);
  },

  methods: {
    /**
     * @description xử lý sự kiện khi ấn vào ô input
     * @author NVThinh 28/1/2023
     */
    onClickInput: function () {
      this.isShowButton = true;
    },

    /**
     * @description Hiển thị các nút chức năng
     * @author 28/1/2023
     */
    showButton: function () {
      return this.index == 0 && this.isShowButton === true;
    },

    /**
     * @description Ẩn button khi click ra ngoài vùng text
     * @author 28/2/2023
     */
    onClickTextOutside: function () {
      this.isShowButton = false;
    },
  },

  data() {
    return {
      data: {}, // Dữ liệu của bình luận
      isShowButton: false, // Hiển thị button khi focus vào ô comment
      // Resources
      Resource,
      Enum,
      Title: Resource.Title,
    };
  },
};
</script>

<style scoped>
.avatar {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

textarea {
  width: 100%;
  margin-left: 60px;
  outline: none;
  border-radius: 6px;
  padding: 8px;
}

textarea:hover,
textarea:focus {
  border-color: #39c0ed;
}

.comment__footer {
  margin-left: 60px;
}

.button + .button {
  margin-left: 20px;
}
</style>