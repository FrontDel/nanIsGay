// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import HeaderNav from './components/Header'
import foot from './components/footer'
Vue.config.productionTip = false
// Vue.use(HeaderNav)
Vue.component('header-nav', HeaderNav)
Vue.component('foot', foot)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
