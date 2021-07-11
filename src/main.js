import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from  '../store/store.js'
import VueSweetalert2 from 'vue-sweetalert2'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import JwPagination from 'jw-vue-pagination';
import ToDoList from "./components/ToDoList";
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuex)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false
Vue.config.productionTip = false
Vue.component('jw-pagination', JwPagination);
Vue.component('to-do-list', ToDoList);
Vue.use(VueSweetalert2);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
