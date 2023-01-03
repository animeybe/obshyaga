import { createRouter, createWebHistory } from 'vue-router';

import loginPage from '../pages/_LoginPage.vue'
import registerPage from '../pages/_RegisterPage.vue'
import Home from '../pages/HomePage.vue'
import Ads from '../pages/AdsPage.vue'
import myAds from '../pages/MyAdsPage.vue'
import Profile from '../pages/ProfilePage.vue'

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
        },
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/ads',
            component: Ads
        },
        {
            path: '/myads',
            component: myAds
        },
    ]
})

export default router;