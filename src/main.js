import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { dom } from "@fortawesome/fontawesome-svg-core";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// SB Admin
import "./assets/vendor/sb-admin-2.min.css";

// アイコンをライブラリに追加して、DOM経由（class）で参照できるようにする。
library.add(fas);
dom.watch();

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(store).use(router).mount("#app");
