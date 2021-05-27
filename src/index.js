import Player from "./Player.vue";

const LottieVuePlayer = {
  install(Vue, options = {}) {
    Vue.component("lottie-vue-player", Player);
  },
};

export default LottieVuePlayer;
