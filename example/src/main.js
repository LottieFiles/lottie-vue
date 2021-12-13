import Vue, { createApp } from "vue";
import App from "./App.vue";
import LottieVuePlayer from "../../dist/@lottiefiles/vue-lottie-player.umd";

const app = createApp(App);

app.use(LottieVuePlayer);
app.mount("#app");
