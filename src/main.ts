import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { inject } from '@vercel/analytics';

import 'nprogress/nprogress.css'

import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'

const pinia = createPinia()
const app = createApp(App)

inject(); // Initialize Vercel Analytics
app.use(pinia)
app.use(router)

app.mount('#app')
