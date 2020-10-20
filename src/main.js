import Vue from "vue";
import './plugins/fontawesome'
import App from "./App.vue";
import router from "./router";

import "./assets/css/all.css";
import store from './store'

Vue.config.productionTip = false;

new Vue({
  router,
  store,

  render: function(h) {
    return h(App);
  }
}).$mount("#app");
