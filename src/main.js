import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store.js'

Vue.config.productionTip = false
Vue.use(Vuex)
const vueStore=new Vuex.Store(store)


new Vue({
    render: h => h(App),
}).$mount('#app')