import { createApp } from 'vue'
//重置样式
import '@/assets/css/reset.css'
// 引入ant-design
import Antd from 'ant-design-vue';


import 'ant-design-vue/dist/reset.css';
//store
import pinia from './store';
// router
import router from './router'
import App from './App.vue'
// import 'ant-design-vue/dist/antd.css';
const app = createApp(App)
app.use(router).use(pinia).use(Antd)

app.mount('#app')
