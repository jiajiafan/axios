import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index.vue'//@以当前src为根路径
import loadable from '@/utils/loadable';

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base:ProcessingInstruction.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/course',
      name: 'course',
      component: loadable(() => import('@/views/course/index.vue'))
    },
     {
       path: '/profile',
       name: 'profile',
       component: loadable(() => import('@/views/profile/index.vue'))
     }
  ]
})
