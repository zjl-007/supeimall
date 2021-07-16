import {
  createRouter,
  createWebHistory
} from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/home/Home.vue'),
    // children: [
    //   {
    //     path: ''
    //   }
    // ]
  },
  {
    path: '/category',
    component: () => import('../views/category/category.vue')
  },
  {
    path: '/shopcart',
    component: () => import('../views/shopcart/shopcart.vue')
  },
  {
    path: '/profile',
    component: () => import('../views/profile/profile.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router