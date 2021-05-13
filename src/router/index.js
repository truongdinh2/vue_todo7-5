import { createRouter, createWebHistory } from 'vue-router';
import About from '../view/about.vue';
import Home from '../view/home.vue'

const routes = [
    {
        path:'/',
        name:'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router;
