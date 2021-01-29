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
      component: () => import(/* webpackChunkName: "contact-us" */ './views/Contactus.vue')
    },
    {
      path: '/adventures/skating/corona',
      name: 'skating-corona',
      component: () => import(/* webpackChunkName: "skating-corona" */ './views/package/SkatingCorona.vue')
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
      component: () => import(/* webpackChunkName: "kayak-private" */ './views/package/KayakPrivate.vue')
    },
    {
      path: '/adventures/kayak/weekend',
      name: 'kayak-weekend',
      component: () => import(/* webpackChunkName: "kayak-weekend" */ './views/package/KayakWeekend.vue')
    },
    {
      path: '/adventures/hiking/private',
      name: 'hiking-private',
      component: () => import(/* webpackChunkName: "hiking-private" */ './views/package/HikingPrivate.vue')
    },
    {
      path: '/adventures/hiking/eightdays',
      name: 'hiking-eightdays',
      component: () => import(/* webpackChunkName: "hiking-eightdays" */ './views/package/HikingEightdays.vue')
    },
    {
      path: '/adventures/skiing/private',
      name: 'skiing-private',
      component: () => import(/* webpackChunkName: "skiing-private" */ './views/package/SkiingPrivate.vue')
    },
    {
      path: '/adventures/skiing/weekend',
      name: 'skiing-weekend',
      component: () => import(/* webpackChunkName: "skiing-weekend" */ './views/package/SkiingWeekend.vue')
    },
    {
      path: '/adventures/skiing/adventures',
      name: 'skiing-adventures',
      component: () => import(/* webpackChunkName: "skiing-adventures" */ './views/package/SkiingAdventures.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import(/* webpackChunkName: "tours" */ './views/info/Tours.vue')
    },
    {
      path: '/get-here',
      name: 'get-here',
      component: () => import(/* webpackChunkName: "get-here" */ './views/info/GetHere.vue')
    },
    {
      path: '/accommodation',
      name: 'accommodation',
      component: () => import(/* webpackChunkName: "accommodation" */ './views/info/Accommodation.vue')
    },
    {
      path: '/sweden',
      name: 'sweden',
      component: () => import(/* webpackChunkName: "About Sweden" */ './views/info/Sweden.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: () => import(/* webpackChunkName: "Article" */ './views/article/Article.vue')
    },
    {
      path: '/video',
      name: 'video',
      component: () => import(/* webpackChunkName: "Video" */ './views/article/Video.vue')
    }
   /* {
      path: '/article/nationalgeographic',
      name: 'Helags summit',
      component: () => import(/* webpackChunkName: "About Sweden" */   /*"./assets/article/NG.html")
    }
*/
  ]
})
