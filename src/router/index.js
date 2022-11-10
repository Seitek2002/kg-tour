import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Catalog from '@/views/Catalog.vue'
import Details from '@/views/Details.vue'
import User from '@/views/User.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'catalog',
    component:Catalog,
  },
  {
    path: '/details/:id',
    name: 'details',
    component: Details,
    props: true
  },
  {
    path: '/user',
    name: 'user',
    component: User,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
