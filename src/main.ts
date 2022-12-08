import { createApp } from 'vue';
import App from './App.vue';
import Vue3Menus from '../package/index'
import elementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
const app = createApp(App)
app.use(Vue3Menus)
app.use(elementPlus);
app.mount('#app')
