import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'
// import Header from '@/pages/home/components/Header.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
    // {
    //   path: '/',
    //   name: 'Header',
    //   component: Header
    // }
  ]
})
