<template>
  <div class="toast__wrapper">
    <div
      :class="[
        'toast',
        { 'toast--error': actionStatus == Enum.ActionStatus.Error },
      ]"
    >
      <div class="toast__icon--background">
        <div class="toast__icon--wrapper center">
          <div class="icon icon--center icon--tick"></div>
        </div>
      </div>
      <div class="toast__info">{{ content }}</div>
    </div>
  </div>
</template>
  
  <script>
import Enum from "@/assets/js/enum";

export default {
  name: "ToastVue",
  props: {
    // Trạng thái: Lỗi, Thành công, ...
    actionStatus: {
      type: Number,
      default: 0,
    },
    // Nội dung hiển thị
    content: {
      type: String,
      default: "Chưa có nội dung để hiển thị",
    },
  },

  mounted() {
    setTimeout(() => {
      this.$parent.closeToast();
    }, 2000);
  },

  data() {
    return {
      // Resources
      Enum, // enum
    };
  },
};
</script>
  
  <style scoped>
@import url(@/assets/css/icon.css);

:root {
  --toast__icon--background: #baeed4;
  --toast__icon--wrapper: #1ac871;
  --toast--error__icon--background: #f59999;
  --toast--error__icon--wrapper: #eb3333;
}

.toast__wrapper {
  position: fixed;
  bottom: 8px;
  right: 8px;
}

.toast {
  display: flex;
  align-items: center;
  width: 450px;
  height: 56px;
  border-radius: 4px;
  padding: 18px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  background-color: #fff;
}

.toast__icon--background {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  background-color: var(--toast__icon--background);
}

.toast__icon--wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  background-color: var(--toast__icon--wrapper);
}

.toast--error .toast__icon--background {
  background-color: var(--toast--error__icon--background);
}

.toast--error .toast__icon--wrapper {
  background-color: var(--toast--error__icon--wrapper);
}

.toast--error .icon--tick {
  background: url(@/assets/img/icons/base/white-exclamation-mark-15.png);
  width: 15px;
  height: 15px;
}

.toast__info {
  padding-left: 18px;
}

.icon--tick {
  background-image: url(@/assets/img/icons/base/app-icon.png) -71px -512px;
  width: 11px;
  height: 8px;
}
</style>