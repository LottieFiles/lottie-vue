import Vue from "vue";
import App from "./App.vue";
import Load from "../components/Load.vue";
import Home from "../components/Home.vue";
import Properties from "../components/Properties.vue";
import Methods from "../components/Methods.vue";
import Controls from "../components/Controls.vue";
import VueRouter from "vue-router";
import LottieVuePlayer from "../../dist/@lottiefiles/vue-lottie-player.common";

Vue.use(LottieVuePlayer);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home      
    },
    {
      path: '/load',
      name: 'load',
      component: Load
    },
    {
      path: '/controls',
      name: 'controls',
      component: Controls
    },
    {
      path: '/properties',
      name: 'properties',
      component: Properties
    },
    {
      path: '/methods',
      name: 'methods',
      component: Methods
    },
  ]
})
Vue.use(VueRouter);

const routes = [
  { path: '/load', component: Load },
]

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
