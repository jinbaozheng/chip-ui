import Vue from 'vue';
import ChipsUI from '../src';
import App from './App.vue';
Vue.use(ChipsUI);
const app = new Vue({
    render: h => h(App)
});
app.$mount('#app')