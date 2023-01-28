import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
import vClickOutside from "click-outside-vue3";
import VueSelect from "vue-select";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import specific icons */
import {
  faBell,
  faUser,
  faHeart,
  faComment,
  faBookmark,
  faNewspaper,
} from "@fortawesome/free-regular-svg-icons";

import { faBookmark as bookmark } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faBell,
  faUser,
  faHeart,
  faComment,
  faBookmark,
  bookmark,
  faNewspaper
);

const app = createApp(App);

// register globally
app.component("v-select", VueSelect);
/* add font awesome icon component */
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.use(vClickOutside);
app.mount("#app");
