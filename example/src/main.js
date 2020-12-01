import Vue from 'vue'
import App from './App.vue'
import LottieVuePlayerPlugin from "../../src";

Vue.use(LottieVuePlayerPlugin)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
