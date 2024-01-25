import './assets/main.css';

import {createApp} from 'vue';
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import {createVfm} from 'vue-final-modal';
import routes from '@/src/router/routes';
import App from './App.vue';
import mitt from 'mitt';


const app = createApp(App);
const vfm = createVfm();
const emitter = mitt();
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  strict: true,
  sensitive: true,
});
app.config.globalProperties.emitter = emitter;
app
  .use(vfm)
  .use(router)
  .mount('#app');