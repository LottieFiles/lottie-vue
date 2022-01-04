import Player from "./Player.vue";
import './vue-lottie-player.css';

const LottieVuePlayer = {
  install: (app, options = {}) => {
    app.component("lottie-vue-player", Player);
  },
};

export default LottieVuePlayer;
