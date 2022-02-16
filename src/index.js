import Player from "./Player.vue";
import "./lottie_player.css";

const LottieVuePlayer = {
  install(Vue, options = {}) {
    Vue.component("lottie-vue-player", Player);
  },
};

export default LottieVuePlayer;
