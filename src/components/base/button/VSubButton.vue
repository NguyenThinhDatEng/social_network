<template>
  <div class="sub-button__wrapper">
    <button class="button button--sub" :id="id" :title="title">
      {{ buttonContent }}
    </button>
  </div>
</template>
      
<script>
export default {
  name: "ButtonOutline",
  props: {
    title: String, // Tooltip button
    buttonContent: {
      type: String,
      default: "click me",
    }, // Nội dung button
    id: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>
      
<style scoped>
@import url(@/assets/css/base/button.css);
.sub-button__wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
}

.button--sub {
  border: 1px solid var(--sub-button);
  color: var(--sub-button);
  width: 100%;
}

.button--sub:hover {
  background-color: var(--sub-button);
  color: white;
}

.button--sub:focus {
  width: calc(100% - 4px);
  height: calc(100% - 4px);
}
</style>