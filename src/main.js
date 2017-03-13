// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vuex from 'vuex';
import store from './vuex/store' //后面讲vuex 配置会提到

// 引用路由插件
import VueRouter from 'vue-router'
// 试用路由插件
Vue.use(VueRouter);

//引入路由配置文件
import routes from './routes'
// import store from './vuex/store'
// 使用配置文件规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes 
});


const app = new Vue({
		router: router,
		render: h => h(App)
}).$mount('#app') 
