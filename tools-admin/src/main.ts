import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/style/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './index.css'
import App from './App.vue'
import route from './routers'
const app = createApp(App)
app.use(createPinia()).use(route).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
