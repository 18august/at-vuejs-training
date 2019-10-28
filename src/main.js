import Vue from 'vue'
import VueI18n from "vue-i18n";
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from "./locales/config";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false

Vue.use(VueI18n);

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
