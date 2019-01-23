// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router';
import router from './router/bolg.js';
import publicRouter from './router/public.js';
Vue.config.productionTip = false
Vue.use(Router,publicRouter);
// 导入自定义路由模块


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}) 
