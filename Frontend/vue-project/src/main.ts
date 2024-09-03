import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue';
import router from './router';
import axios from 'axios';

const app = createApp(App)

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5000/';  // the FastAPI backend

app.use(createPinia())
app.use(router)

app.mount('#app')
