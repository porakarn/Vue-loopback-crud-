import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Addmeetup from '@/components/Addmeetup'
import Meetups from '@/components/Meetups'
import Viewmeetup from '@/components/Viewmeetup'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
     {
       path: '/addmeetup',
       name: 'Addmeetup',
       component: Addmeetup
     },
     {
       path: '/meetups',
       name: 'Meetups',
       component: Meetups
     },
     {
       path: '/meetups/:id',
       name: 'Viewmeetup',
       component: Viewmeetup
     }
     

  ]
})


