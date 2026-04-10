import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "bootstrap/dist/css/bootstrap.min.css";
// import moment from 'moment'
// Vue.prototype.moment = moment




// import 'popper.js';

createApp(App).use(store).use(router).mount('#app')
import "bootstrap/dist/js/bootstrap.js"
// import Vue from 'vue';