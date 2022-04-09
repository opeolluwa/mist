import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import "./axios"

import VueClipboard from 'vue-clipboard2'
import './registerServiceWorker'
import router from './router'

Vue.use(VueClipboard)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
