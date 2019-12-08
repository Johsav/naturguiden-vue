import '@babel/polyfill'
import Vue from 'vue'
import Vuetify from 'vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
/* import 'vuetify/src/stylus/app.styl' */
import VueYouTubeEmbed from 'vue-youtube-embed'
import vPlayBack from 'v-playback'



Vue.config.productionTip = false

Vue.use(VueYouTubeEmbed)

Vue.use(vPlayBack)

Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',   //Moderate blue
    secondary: '#616161', //Very dark gray
    accent: '#f44336',    //Bright red
    error: '#ff5722',     //Vivid red
    warning: '#ff9800',   //Pure orange
    info: '#03a9f4',      //Vivid blue
    success: '#8bc34a'    //Moderate green
  }
})

new Vue({
  router,
  Vuetify,
  render: h => h(App)
}).$mount('#app')