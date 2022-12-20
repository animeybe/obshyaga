import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index.js'
import { VueCookieNext } from 'vue-cookie-next'

createApp(App).use(router).use(VueCookieNext).mount('#app')

VueCookieNext.config({ expire: '7d' })