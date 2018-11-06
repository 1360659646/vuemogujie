import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import shopping from '@/components/shopping/shopping'
import mall from '@/components/mall/mall'
import my from '@/components/my/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/home'
    },
    {
      path: '/home/home',
      component: home
    },
    {
      path: '/shopping',
      component: shopping
    },
    {
      path: '/mall',
      component: mall
    },
    {
      path: '/my',
      component: my
    },
    {
      path: '*',
      component: home
    }

  ]
})
