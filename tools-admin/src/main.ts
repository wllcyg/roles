import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import route from './routers'
createApp(App).use(createPinia()).use(route).mount('#app')
