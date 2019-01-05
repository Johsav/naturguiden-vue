import Vue from 'vue'
import Vuetify from 'vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'vuetify/src/stylus/app.styl'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#616161',
    accent: '#f44336',
    error: '#ff5722',
    warning: '#ff9800',
    info: '#03a9f4',
    success: '#8bc34a'
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')