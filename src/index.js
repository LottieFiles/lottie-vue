import Player from "./Player.vue";

const LottieVuePlayerPlugin = {
    install(Vue, options = {}) {
        Vue.component('lottie-vue-player', Player)
    }
}

export default LottieVuePlayerPlugin