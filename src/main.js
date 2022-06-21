// vue imports
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import components from '@/components/UI';

// styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/scss/style.scss';

// jquery
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;


// creating app
const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component);
});

app
    .use(store)
    .use(router)
    .mount('#app');
