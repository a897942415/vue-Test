import {createRouter,createWebHistory } from 'vue-router';


const routes = [
    {
        path:'/home',
        name:'home',
        component: ()=> import('@/components/shop/Home.vue')
    },
    {
        path:'/',
        redirect: '/home',
    },
    {
        path:'/list',
        name:'list',
        component: ()=> import('@/components/shop/List.vue')
    },
    {
        path:'/car',
        name:'car',
        component: ()=> import('@/components/shop/Car.vue')
    },
    {
        path:'/my',
        name:'my',
        component: ()=> import('@/components/shop/My.vue')
    },
]
const router = createRouter({
    mode:'history',
    history: createWebHistory(),
    base:process.env.BASE_URL,
    routes,
})
export default router