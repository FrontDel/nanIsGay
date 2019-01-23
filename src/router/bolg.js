import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/Blog/Blog'
import BlogList from '@/Blog/BlogList'
Vue.use(Router)
export default new Router({
  routes: [
		
		{
			path: '/',
			name: 'Blog',
			component: Blog
		},
		{
			path: '/BlogList',
			name: 'BlogList',
			component: BlogList
		},
  ]
})