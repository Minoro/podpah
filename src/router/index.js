import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Busca from '@/components/Pages/Busca'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Player',
      component: Home
    },
    {
      path: '/busca',
      name: 'Busca',
      component: Busca
    }
  ]
})
