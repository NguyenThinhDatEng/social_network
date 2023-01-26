<template>
  <div class="popup-wrapper" @keydown.esc="close">
    <div class="center popup">
      <!-- Popup Header -->
      <div class="popup__header">
        <span>{{ title }}</span>
        <button
          class="icon icon--18px icon--close"
          :title="Title.close"
          @click="close()"
        ></button>
      </div>
      <!-- Popup body  -->
      <div class="popup__body">
        <slot />
      </div>
      <!-- Popup footer  -->
      <div class="popup__footer">
        <ButtonMain
          :title="Title.save"
          :button-content="Resource.ButtonContent.save"
          :type="Enum.Type.Main"
          @click="$emit('on-save')"
        ></ButtonMain>
        <ButtonMain
          :title="Title.cancel"
          :button-content="Resource.ButtonContent.cancel"
          :type="Enum.Type.Secondary"
          @click="close()"
          @keydown.tab="$emit('on-tab')"
        ></ButtonMain>
      </div>
    </div>
  </div>
</template>
    
    <script>
// Resources
import Resource from "@/assets/js/resources";
import Enum from "@/assets/js/enum";
//Components
import ButtonMain from "@/components/base/button/ButtonMain.vue";

export default {
  name: "AssetDetail",
  components: {
    ButtonMain,
  },
  props: {
    // Tiêu đề của popup
    title: {
      type: String,
      required: true,
    },
    // Chế độ của popup
    mode: {
      type: Number,
      default: 0,
    },
    // Đối tượng popup
    popupObj: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },

  emits: ["close-popup", "on-save", "on-tab"],

  methods: {
    /**
     * @description Đóng popup
     * @author NVThinh 5/1/2023
     */
    close: function () {
      this.$emit("close-popup");
    },

    /**
     * Thực hiện hàm updateFilter của component cha
     * @param {string} field trường của dữ liệu
     * @param {string} value giá trị được cập nhật
     * @author NVThinh 7/1/2023
     */
    updateFilter: function (field, value) {
      try {
        this.$parent.updateFilter(field, value);
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * Lấy thông tin các tài sản được chọn
     * @param {Array} selectedRows mảng các dòng được chọn
     * @author Nguyen Van Thinh 7/1/2023
     */
    updateRow: function (selectedRows) {
      try {
        // Truyền mảng các dòng được chọn lên component cha
        this.$parent.updateRow(selectedRows);
      } catch (error) {
        console.log(error);
      }
    },
  },
  data() {
    return {
      // Resources
      Resource,
      Enum,
      Title: Resource.Title,
    };
  },
};
</script>
    
    <style scoped>
@import url(@/assets/css/icon.css);

.popup-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(16, 15, 15, 0.5);
  z-index: 2;
}

.popup {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  width: 864px;
  background-color: #fff;
}

.popup__header {
  display: flex;
  justify-content: space-between;
  padding: 20px 16px;
}

.popup__header span {
  font-family: T Bold;
  font-size: 18px;
}

.popup__header button {
  border: none;
  background-color: transparent;
}

.popup__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 16px;
}

.popup__body .input-row {
  display: flex;
  margin-bottom: 20px;
}

.popup__body .input-row input:focus::placeholder {
  color: transparent;
}

.popup__body .input-row .input--disabled {
  color: #000;
}

.popup__body--left {
  position: relative;
  flex: 1;
  margin-right: 16px;
}

.popup__body--left .input__wrapper {
  position: absolute;
  top: 0;
  width: 100%;
}

.popup__body--right {
  flex: 2.06;
}

.popup__body--right .input-row {
  margin-bottom: 0;
}

.popup__body--right-child {
  flex: 1;
}

.popup__footer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row-reverse;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  height: 50px;
  background-color: #f5f5f5;
  padding-right: 16px;
}

.input-row .combobox input {
  padding-right: 36px;
}

.input-row label + input,
.input-row label + button,
.input-row label + div {
  margin-top: 8px;
}

.input-row input {
  width: 100%;
  height: 36px;
}

.input-row .input {
  padding: 0 14px;
}

input.input.input--error + .error-message {
  display: block;
}

.purchase-date button {
  position: absolute;
  right: 0;
  border: none;
}

.popup__date {
  position: relative;
}
</style>