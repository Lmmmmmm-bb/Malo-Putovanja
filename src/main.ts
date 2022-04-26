import { createApp } from 'vue';
import App from './app/index.vue';
import router from './router';
import './common/styles/global.scss';
import { createNaiveMeta } from './common/utils';

const app = createApp(App);

app.use(router);
// 防止 tailwind 覆盖 naive 样式
createNaiveMeta();
app.mount('#app');
