<template>
  <div class="input__wrapper">
    <input class="input" :placeholder="placeholder" />
    <div class="icon__wrapper">
      <div class="icon icon--24px icon--search center" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  created() {},
  components: {},
  props: {
    placeholder: String, // placeholder của ô input
  },
  emits: [],
  methods: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url(@/assets/css/base/input.css);
@import url(@/assets/css/icon.css);

.input {
  color: #171717;
}

.icon__wrapper {
  position: absolute;
  top: 0;
  right: 0;
}
</style>