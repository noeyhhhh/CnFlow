import { createRouter, createWebHistory } from "vue-router"
import Home from '@/views/Home/Home.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'main',
          name: 'main',
          component:() => import('@/views/Home/main/main.vue')
        },
        {
          path: 'toDoList',
          name: 'toDoList',
          component:() => import('@/views/Home/toDoList/toDoList.vue')
        },
        {
          path: 'newForm',
          name: 'newForm',
          component:() => import('@/views/Home/newForm.vue')
        },
        {
          path: 'historicalQuery',
          name: 'historicalQuery',
          component:() => import('@/views/Home/historicalQuery.vue')
        },
        {
          path: 'flowTracing',
          name: 'flowTracing',
          component:() => import('@/views/Home/flowTracing.vue')
        },
        {
          path: 'bulletinBoard',
          name: 'bulletinBoard',
          component:() => import('@/views/Home/bulletinBoard.vue')
        },
        {
          path: 'applicationProgram',
          name: 'applicationProgram',
          component:() => import('@/views/Home/applicationProgram.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/Login.vue'),
      
    }
  ]
})
export default router