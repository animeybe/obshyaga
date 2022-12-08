import { createRouter, createWebHistory } from 'vue-router';

import loginPage from '../components/_LoginPage.vue'
import registerPage from '../components/_RegisterPage.vue'
import Home from '../components/HomePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/login',
            component: loginPage
        },
        {
            path: '/register',
            component: registerPage
        }
    ]
})

export default router;