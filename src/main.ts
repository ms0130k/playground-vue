import './assets/main.css';

import {createApp} from 'vue';
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import {createVfm} from 'vue-final-modal';
import routes from '@/src/router/routes';
import App from './App.vue';


const app = createApp(App);
const vfm = createVfm();
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

app
  .use(vfm)
  .use(router)
  .mount('#app');