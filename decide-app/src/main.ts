import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './index.css';
import App from "./App.vue";
import router from "./router"
import { appAxios } from './utils/appAxios';


import PrimeVue from 'primevue/config';
import Button from "primevue/button";
import Sidebar from 'primevue/sidebar';
import ConfirmDialog from 'primevue/confirmdialog';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.use(createPinia());
app.config.globalProperties.$appAxios = appAxios;


app.component("Button", Button);
app.component("Sidebar", Sidebar);
app.component("ConfirmDialog", ConfirmDialog);


app.mount('#app');




