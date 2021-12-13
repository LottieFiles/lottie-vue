import Player from "./Player.vue";

const LottieVuePlayer = {
  install: (app, options = {}) => {
    app.component("lottie-vue-player", Player);
  },
};

export default LottieVuePlayer;
