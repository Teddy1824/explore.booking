import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
// import Signup from '../views/Signup.vue'
// import About from '../views/About.vue'
import Places from '../views/Locations.vue'
import Contact from '../views/Contact.vue'

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
  // {
  //   path: '/user/signup',
  //   name: 'Signup',
  //   component: Signup
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About
  // },
  {
    path: '/places',
    name: 'Places',
    component: Places
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
