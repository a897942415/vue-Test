import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './config/flexible';
// 1. 引入你需要的组件
import { Tab,Tabs } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';
//公共css文件
import './common/common.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

const app = createApp(App);
app.use(router);
app.use(Tab).use(Tabs);
app.use(Swiper).use(SwiperSlide);
app.mount('#app');
