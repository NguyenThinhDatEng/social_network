<template>
  <div class="input__wrapper">
    <!-- Label of input -->
    <label v-if="label != ''">
      {{ label }} <span v-show="isRequired" style="color: red">*</span></label
    >
    <!-- Password input -->
    <div v-if="isPassword" class="password-login">
      <input
        id="input"
        :class="inputClass"
        :type="onEye ? 'password' : 'text'"
        :placeholder="placeholder || getPlaceholder()"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <div
        :class="['eye', { 'on-eye': onEye }, { 'off-eye': !onEye }]"
        @click="toggle"
      ></div>
    </div>
    <!-- Input -->
    <input
      v-else
      id="input"
      :class="['input', inputClass]"
      :placeholder="placeholder || getPlaceholder()"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <!-- error message -->
    <p
      v-if="isError"
      class="error-message"
      v-html="label + ' ' + Resource.ErrorMessage.blank"
    ></p>
  </div>
</template>

<script>
// Resources
import Resource from "@/assets/js/resources";

export default {
  name: "NormalInput",
  props: {
    label: {
      type: String,
      default: "Lable is required!",
      isRequired: true,
    }, // Nhãn của input

    isError: {
      type: Boolean,
      default: false,
    }, // true nếu thiếu dữ liệu yêu cầu

    isRequired: {
      type: Boolean,
      default: true,
    }, // Thông tin bắt buộc nhập

    isPassword: {
      type: Boolean,
      default: false,
    }, // input dùng để nhập mật khẩu

    inputClass: {
      type: String,
      default: "",
    }, // lớp css cho input

    placeholder: {
      type: String,
      default: "",
    },

    modelValue: String,
  },
  emits: ["update:modelValue"],

  methods: {
    /**
     * @description Ẩn/hiện mật khẩu
     * @author NVThinh 25/01/2023
     */
    toggle: function () {
      this.onEye = !this.onEye;
    },

    /**
     * @return placeholder
     * @author NVThinh 25/1/2023
     */
    getPlaceholder: function () {
      return "Nhập " + this.label.toLowerCase();
    },
  },
  data() {
    return {
      onEye: true, // Tắt hiển thị mật khẩu
      // Resources
      Resource,
    };
  },
};
</script>

<style scoped>
.input__wrapper {
  padding-bottom: 20px;
}

label {
  width: 100%;
  text-align: left;
}

::placeholder {
  font-family: T Italic;
}

/* Icons */
.eye {
  width: 24px;
  height: 24px;
  position: absolute;
  right: 10px;
  top: 0;
  transform: translate(0, 50%);
  background-repeat: no-repeat;
  cursor: pointer;
}
.on-eye {
  background-image: url(@/assets/img/icons/base/Icon-qlts-update.svg);
  background-position: -64px -328px;
}
.off-eye {
  background-image: url(@/assets/img/icons/base/Icon-qlts-update.svg);
  background-position: -19px -329px;
}

/* password */
.password-login {
  position: relative;
}
.error-message {
  position: absolute;
  bottom: -2;
  color: red;
}
</style>