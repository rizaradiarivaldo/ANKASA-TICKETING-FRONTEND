import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Explore',
    component: () => import('../views/Explore.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/forgotpass',
    name: 'ForgotPassword',
    component: () => import('../views/ForgotPassword.vue')
  },
  {
    path: '/mybooking',
    name: 'Mybooking',
    component: () => import('../views/Mybooking.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/booking',
    name: 'Booking',
    component: () => import('../views/FlightDetail.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/findticket',
    name: 'FindTicket',
    component: () => import('../views/FindTicket.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/editprofile',
    name: 'EditProfile',
    component: () => import('../views/EditProfile.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/bookingdetail',
    name: 'BookingDetail',
    component: () => import('../views/BookingDetail.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) { // jika ada requiresAuth TRUE di setiap path
    if (store.getters['auth/isLogin']) { // masuk selanjutnya jika tidak ada getters di login
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
