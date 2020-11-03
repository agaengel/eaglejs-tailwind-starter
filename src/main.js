import Vue from "vue";
import Router from "vue-router";
import App from "./App";
import Home from "./Home";

import Eagle, {
  CodeBlock,
  CodeComment,
  ImageSlide,
  Modal,
  Options,
  Presenter,
  RadioButton,
  Timer,
  Toggle,
  TriggeredMessage,
} from "eagle.js";
import hljs from "highlight.js";
import "animate.css";
import "highlight.js/styles/a11y-dark.css";
import "@/assets/styles/index.css";

Vue.use(Eagle);
Vue.use(Router);
Vue.config.productionTip = true;
Options.hljs = hljs;
Eagle.use(Presenter);
Eagle.use(CodeBlock);
Eagle.use(CodeComment);
Eagle.use(Toggle);
Eagle.use(RadioButton);
Eagle.use(Timer);
Eagle.use(TriggeredMessage);
Eagle.use(Modal);
Eagle.use(ImageSlide);

const routes = [];
routes.push({ path: "*", component: Home });

const router = new Router({
  routes,
});

var vm = new Vue({ router, render: (h) => h(App) });
vm.$mount("#app");
