import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index.js'
import store from '../src/store/index.js'

createApp(App).use(router).use(store).mount('#app')




