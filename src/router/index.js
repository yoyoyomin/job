import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)
const user = () => import('../components/uesr/user')
const company = () => import('../components/company/company')
const zhiwei = () => import('../components/zhiwei/zhiwei')
const homeindex = () => import("../components/home/homeindex")
const career = () => import("../components/career/career")

const login = () => import('../views/login.vue')
const registe = () => import('../views/registe.vue')
 

const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'',
        redirect: '/home/homeindex'
      },
      {
        path:'homeindex',
        name:'homeindex',
        component:homeindex
      },
      {
        path:'user',
        name:'user',
        component:user
      },
      {
        path:"career",
        name:"career",
        component:career
      },
      {
        path:'company',
        name:'company',
        component:company
      },
      {
        path:'zhiwei',
        name:'zhiwei',
        component:zhiwei
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component:login
  },
  {
    path:'/registe',
    name:'registe',
    component:registe
  }
 
 
 
 
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
