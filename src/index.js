import './assets/js/common';
import './assets/scss/index.scss';
import { createApp } from 'vue';
import App from './App.vue';
import routers from "@/routers";
import stores from "@/assets/store/stores";


const app = createApp(App);
app.use(routers);
app.use(stores);
app.mount('#app')
