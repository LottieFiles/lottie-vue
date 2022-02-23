import Vue from "vue";
import App from "./App.vue";
import LottieVuePlayer from "../../dist/@lottiefiles/vue-lottie-player.common";

Vue.use(LottieVuePlayer);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
