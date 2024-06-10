import './assets/main.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import axios from 'axios'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

axios.defaults.baseURL = 'http://localhost:5555'

const app = createApp(App)


app
    .use(createPinia())
    .use(Toast)
    .use(router, axios)
    .mount('#app')