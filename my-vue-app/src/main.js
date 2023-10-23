import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router.js';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.component('Button', Button);

app.mount('#app');
