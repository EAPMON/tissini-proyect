import Vue from 'vue'
import VueRouter from 'vue-router'
import Customer from '../views/customer/Customer.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'customer',
    component: Customer,
    meta: { requiresAuth: true },
    children: [
      {
          path: '/categories',
          name: 'Category',
          component: () => import('../views/Category.vue'),
          meta: { requiresAuth: true },
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/Login.vue"),
    meta: { requiresAuth: false },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (!("customer" in localStorage)) {
      next('/login')
    }else {
      next()
    }
  }else {
    next()
  }
})
export default router
