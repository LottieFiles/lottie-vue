import Vue from "vue";
import App from "./App.vue";
import LottieVuePlayer from "@lottiefiles/vue-lottie-player";

Vue.use(LottieVuePlayer);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
