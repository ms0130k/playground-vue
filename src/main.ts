import './assets/main.css'

import { createApp } from 'vue'
import { createVfm } from 'vue-final-modal'
import App from './App.vue'

const app = createApp(App);
const vfm = createVfm();
app.use(vfm).mount('#app');


