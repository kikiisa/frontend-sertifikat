import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/toast/jquery.toast.min.css'
import './assets/toast/jquery.toast.min.js'
createApp(App).use(store).use(router).mount('#app')
