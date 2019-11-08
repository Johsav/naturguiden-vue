import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/info',
      name: 'info',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "info" */ './views/Info.vue')
    },
    {
      path: '/adventures',
      name: 'adventures',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "adventures" */ './views/Adventures.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "skating-private" */ './views/Contactus.vue')
    },
    {
      path: '/adventures/skating/private',
      name: 'skating-private',
      component: () => import(/* webpackChunkName: "skating-private" */ './views/package/SkatingPrivate.vue')
    },
    {
      path: '/adventures/skating/weekend',
      name: 'skating-weekend',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "skating-weekend" */ './views/package/SkatingWeekend.vue')
    },
    {
      path: '/adventures/kayak/private',
      name: 'kayak-private',
      component: () => import(/* webpackChunkName: "skating-private" */ './views/package/KayakPrivate.vue')
    },
    {
      path: '/adventures/kayak/weekend',
      name: 'kayak-weekend',
      component: () => import(/* webpackChunkName: "skating-private" */ './views/package/KayakWeekend.vue')
    },
    {
      path: '/adventures/hiking/private',
      name: 'hiking-private',
      component: () => import(/* webpackChunkName: "skating-private" */ './views/package/HikingPrivate.vue')
    },
    {
      path: '/adventures/hiking/weekend',
      name: 'hiking-weekend',
      component: () => import(/* webpackChunkName: "skating-private" */ './views/package/HikingWeekend.vue')
    },
    {
      path: '/adventures/skiing/private',
      name: 'skiing-private',
      component: () => import(/* webpackChunkName: "skating-private" */ './views/package/SkiingPrivate.vue')
    },
    {
      path: '/adventures/skiing/weekend',
      name: 'skiing-weekend',
      component: () => import(/* webpackChunkName: "skating-private" */ './views/package/SkiingWeekend.vue')
    }
    
  ]
})
