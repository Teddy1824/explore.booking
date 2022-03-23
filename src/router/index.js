import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
// import Signup from '../views/Signup.vue'
// import About from '../views/About.vue'
import Places from '../views/Locations.vue'
import Contact from '../views/Contact.vue'
import Booking from '../views/Bookings.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/login',
    name: 'Login',
    component: Login  
  },
  {
    path: '/places',
    name: 'Places',
    component: Places
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/booking/:id',
    name: 'Booking',
    component: Booking,
    props: true
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/user/login', '/', '/contact'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');
//   if (authRequired && !loggedIn) {
//     next('/user/login');
//   } else {
//     next();
//   }
// });

export default router
