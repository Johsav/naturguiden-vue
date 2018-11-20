import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Great from './views/Great.vue'
import One from './views/PortfolioOne.vue'
import Two from './views/PortfolioTwo.vue'
import Three from './views/PortfolioThree.vue'

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
      component: About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/great',
      name: 'great',
      component: Great
    },
    {
      path: '/one',
      name: 'one',
      component: One
    },
    {
      path: '/portfolio/two',
      name: 'two',
      component: Two
    }  ,
    {
      path: '/portfolio/three',
      name: 'three',
      component: Three
    }  
  ]
  //, mode: 'history'
})
