import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib'

Vue.config.productionTip = false
Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#80867d',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  }
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
