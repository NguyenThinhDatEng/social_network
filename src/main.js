import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
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
} from "@fortawesome/free-regular-svg-icons";

import { faBookmark as bookmark } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faBell, faUser, faHeart, faComment, faBookmark, bookmark);

const app = createApp(App);

/* add font awesome icon component */
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.mount("#app");
