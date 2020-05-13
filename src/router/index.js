import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
    },
    {
      path: '/shop',
      name: 'Shop',
      exact:true,
      component: () => import('../views/Shop.vue')
    },
    {
      path:'/signin',
      name:'signin',
      component:() => import('../views/SignIn')
    },
    {
      path:'/shop/:directoryType',
      component: () => import('../views/OneDirectoryItemsPage')
    },
    {
      path: '/cart',
      component: () => import('../views/CartPage'),
    },
    {
      path: '/404',
      component: () => import('../views/Page404')
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
