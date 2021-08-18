import { createApp } from 'vue';
import 'milligram/dist/milligram.css';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import './less/index.less';

import App from './App.vue';
import router from './router';

hljs.registerLanguage('javascript', javascript);

const app = createApp(App);
app.use(router);
app.mount('#app');
