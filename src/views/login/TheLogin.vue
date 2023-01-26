<template>
  <!-- background -->
  <div id="frmLogin">
    <LoaderVue :is-show="isShowLoader" />
    <!-- Main -->
    <div class="h-100 w-100 main">
      <!-- Form -->
      <div id="grid-login">
        <!-- left form -->
        <div class="half-ctn login__img"></div>
        <!-- right form -->
        <div class="half-ctn">
          <!-- The main of right form -->
          <div class="main-login-ctn">
            <!-- logo -->
            <div class="registration__title">Welcome to DEV Community 👩‍💻👨‍💻</div>
            <!-- introduction text -->
            <div class="logo-text">
              {{ Resource.app.login_with }}<b>{{ Resource.app.logo }}</b>
            </div>
            <!-- Inputs -->
            <div id="normal-login">
              <div class="grid-login-normal">
                <!-- user name -->
                <div class="username-login login">
                  <VInput
                    :input-class="'input-login'"
                    :label="Dictionary.info.user.name.VN"
                    :is-error="isError.username"
                    v-model="username"
                  />
                </div>
                <!-- password -->
                <VInput
                  :input-class="'input-login'"
                  :is-password="true"
                  :label="Dictionary.info.user.password.VN"
                  :is-error="isError.password"
                  v-model="password"
                />
                <!-- login button -->
                <div class="button-login">
                  <button
                    class="button"
                    id="login"
                    @click="handleOnClickButton"
                    @keydown.enter="handleOnClickButton"
                  >
                    {{ Resource.ButtonName.login }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copy-right">{{ Resource.app.copyright }}</div>
  </div>
  <!-- Toast -->
  <ToastVue
    v-if="toast.isShow"
    :action-status="Enum.ActionStatus.Error"
    :content="toast.content"
  ></ToastVue>
</template>
  
  <script>
// Resources
import Resource from "@/assets/js/resources";
import Enum from "@/assets/js/enum";
import Dictionary from "@/assets/js/resources/dictionary";
import { setCookie } from "@/assets/js/common/function";
// Components
import ToastVue from "@/components/base/toast/VToast.vue";
import LoaderVue from "@/components/more/VLoader.vue";
import VInput from "@/components/base/input/VInput.vue";

export default {
  name: "LoginScreen",
  components: {
    ToastVue,
    LoaderVue,
    VInput,
  },

  watch: {
    username: function () {
      this.isError.username = false;
    },
    password: function () {
      this.isError.password = false;
    },
  },

  methods: {
    /**
     * @description Xử lý sự kiện khi ấn vào nút đăng nhập
     * @author NVThinh 4/1/2023
     */
    handleOnClickButton: function () {
      try {
        const error = this.username.trim() == "" || this.password.trim() == "";
        // Kiểm tra các ô input yêu cầu nhập
        if (error) {
          if (this.username.trim() == "") {
            this.isError.username = true;
          }
          if (this.password.trim() == "") {
            this.isError.password = true;
          }
        } else {
          // Tạo 1 cookie tạm thời
          document.cookie = setCookie("username", this.username, 1 / 24);
          // Nếu thỏa mãn hết các điều kiện
          if (this.username == "TheWill" && this.password == "asdf")
            this.$router.push("/");
          else {
            this.toast.content = "Thông tin đăng nhập không hợp lệ";
            this.openToast();
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * @description Ẩn toast
     * @author NVThinh 4/1/2023
     */
    closeToast: function () {
      this.toast.isShow = false;
    },

    /**
     * @description Hiển thị toast
     * @author NVThinh 5/1/2023
     */
    openToast: function () {
      this.toast.isShow = true;
    },

    /**
     * @description Ẩn Loader
     * @author NVThinh 4/1/2023
     */
    closeLoader: function () {
      this.isShowLoader = false;
    },

    /**
     * @description Hiển thị Loader
     * @author NVThinh 5/1/2023
     */
    openLoader: function () {
      this.isShowLoader = true;
    },
  },

  data() {
    return {
      username: "",
      password: "",
      isError: {
        username: false,
        password: false,
      },
      // Toast
      toast: {
        isShow: false, // Ẩn/hiện toast
        content: "", // Nội dung hiển thị
      },
      // Loader
      isShowLoader: false,
      // Resources
      Resource,
      Enum,
      Dictionary,
      Function,
      fields: {
        account: "account",
        password: "password",
      }, // Các trường dữ liệu
    };
  },
};
</script>
  
  <style scoped>
@import url(@/assets/css/base.css);

.button-login {
  margin-top: 20px;
}

.registration__title {
  font-size: 1.5rem;
  font-weight: 900;
  padding-bottom: 12px;
}

#frmLogin {
  height: 100vh;
  color: #4f4f4f;
  margin: 0;
  line-height: 1.6;
  background-color: #fff;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.h-100 {
  height: 100% !important;
}

.w-100 {
  width: 100% !important;
}

.main {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(@/assets/img/view/login-background.png);
}

.half-ctn {
  text-align: center;
  width: 60%;
}

#mainContent {
  padding: 0px !important;
}

.hide {
  display: none !important;
}

.main-login-ctn {
  margin: 40px;
}

#grid-login {
  width: 725px;
  display: flex;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.16);
  overflow: hidden;
  position: absolute;
  height: 560px;
}

.grid-login-normal {
  text-align: left;
}

.logo {
  margin: 0px auto;
  background-repeat: no-repeat;
  height: 60px;
  width: 100px;
  background-size: cover;
  background-image: url(@/assets/img/view/MISA-logo.png);
  background-size: contain;
}

.logo-text {
  text-align: center;
  font-size: 13px;
  padding-bottom: 12px;
}

.login__img {
  background-image: url(@/assets/img/view/login-img.png);
  background-repeat: no-repeat;
  width: 40%;
  height: 100%;
}

.login {
  position: relative;
  padding-bottom: 8px;
}

.button {
  width: 100%;
  height: 44px;
  border-radius: 4px;
  margin-top: 4px;
  font-size: 16px !important;
  outline: none;
  border: none;
  background-color: #1a73e8;
  color: #fff;
  cursor: pointer;
}

.button:focus {
  border: 2px solid var(--border--focus);
}

.copy-right {
  width: 200px;
  height: 14px;
  position: absolute;
  bottom: 29px;
  color: #000;
  left: calc(50% - 100px);
  text-align: center;
  color: #fff;
}
</style>