import { createApp } from 'vue'
import { auth } from "../src/firebaseConfig.js";
import App from './App.vue'
import router from '../src/router/index.js'
import store from '../src/store/index.js'

createApp(App).use(router).use(store).use(auth).mount('#app')