import Vue from 'vue'
import App from './App'

import store from './store'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import routes from './routes'
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes 
});

const app = new Vue({
		router: router,
		store,
		render: h => h(App)
}).$mount('#app') 
