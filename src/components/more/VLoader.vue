<template>
  <div class="loader__background" v-show="isShow">
    <div class="loader"></div>
  </div>
</template>
  
  <script>
export default {
  name: "TheLoader",
  props: {
    isShow: Boolean,
  },
  data() {
    return {};
  },
};
</script>
  
  <style scoped>
.loader__background {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: rgba(22, 22, 22, 0.5); */
  overflow: hidden;
  z-index: 2;
}

.loader {
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>