import {
  createRouter,
  createWebHistory
} from 'vue-router'

const detail = () => import("../views/detail/Detail.vue")
const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      showTab: true
    }
  },
  {
    path: '/home',
    component: () => import('../views/home/Home.vue'),
    meta: {
      showTab: true
    }
    // children: [
    //   {
    //     path: ''
    //   }
    // ]
  },
  {
    path: '/category',
    component: () => import('../views/category/category.vue'),
    meta: {
      showTab: true
    }
  },
  {
    path: '/shopcart',
    component: () => import('../views/shopcart/shopcart.vue'),
    meta: {
      showTab: true
    }
  },
  {
    path: '/profile',
    component: () => import('../views/profile/profile.vue'),
    meta: {
      showTab: true
    }
  },
  {
    path: '/detail/:iid',
    component: detail,
    meta: {
      showTab: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router