import Vue from 'vue'
import Router from 'vue-router'
import BlogHeader from '@/Blog/BlogHeader'
import BlogFootder from '@/Blog/BlogFootder'
import BlogPerson from '@/Blog/BlogPerson'

Vue.use(Router)
const r = require.context('@/Blog', true, /\.vue$/);
const componentData = r.keys().map(r);
export default componentData.map(c => {Vue.component(c.default.name,c.default)})
