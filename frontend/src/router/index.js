import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Recomendation from '../views/Recomendation'
import About from '../views/About'
import Sitio from '../views/Sitio'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/recomendation/sitio',
      name: 'RecomendationSite',
      component: Sitio
    },
    {
      path: '/recomendation',
      name: 'Recomendation',
      component: Recomendation
    }
  ]
})
