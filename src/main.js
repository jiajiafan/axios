import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store/store'
import 'amfe-flexible' //实现px2rem
import Cube from 'cube-ui'

Vue.use(Cube)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
