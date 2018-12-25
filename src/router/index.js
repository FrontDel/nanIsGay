import Vue from 'vue'
import Router from 'vue-router'
import WebHome from '../pages/webviews/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'webhome',
      component: WebHome
    }
  ]
})
