import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home
  }
})


function * fn() {
  yield 1;
  yield 2;
}
// fn.next();
console.log(fn().next())
