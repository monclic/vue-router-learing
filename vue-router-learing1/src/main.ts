import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";//注册，还要在createApp中添加.use(router)

createApp(App).use(router).mount('#app')
