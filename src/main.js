import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

//公共css文件
import './common/common.css'

const app = createApp(App);
app.use(router);
app.mount('#app');
