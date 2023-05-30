import {createRouter,createWebHistory } from 'vue-router';


const routes = [
    {
        paht:'/',
        name:'HelloWorld',
        //路由懒加载 import('@/components/HelloWorld')
        component: import('@/components/HelloWorld.vue')
    },
    {
        paht:'/',
        name:'list',
        //路由懒加载 import('@/components/HelloWorld')
        component: import('@/components/List.vue')
    },
    {
        paht:'/',
        name:'car',
        //路由懒加载 import('@/components/HelloWorld')
        component: import('@/components/Car.vue')
    },
    {
        paht:'/',
        name:'my',
        //路由懒加载 import('@/components/HelloWorld')
        component: import('@/components/My.vue')
    },
]
const router = createRouter({
    mode:'history',
    history: createWebHistory(),
    base:process.env.BASE_URL,
    routes,
})
export default router