import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './routes';
import axios from 'axios'

Vue.use(Vuetify,router,axios, {
  theme:{
    primary: '#69F0AE',
    secondary: '#B9F6CA',
    back:"FFFFFF",
    tree: '#00E676',
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
