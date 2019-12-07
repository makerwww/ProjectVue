import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Catalog from '../views/Catalog'
import Cart from '../views/Cart'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Catalog/:category',
    name: 'catalog',
    component: Catalog,
    children: [
      {
        path: ':itemType',
      },
    ]
  },
  {
    path: '/Cart',
    name: 'cart',
    component: Cart,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
