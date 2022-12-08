import { createRouter, createWebHistory } from 'vue-router';

import loginPage from '../components/_LoginPage.vue'
import registerPage from '../components/_RegisterPage.vue'
import Home from '../components/HomePage.vue'
import Ads from '../components/AdsPage.vue'
import myAds from '../components/MyAdsPage.vue'
import Profile from '../components/ProfilePage.vue'
import News from '../components/NewsPage.vue'

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
        {
            path: '/news',
            component: News
        },
    ]
})

export default router;