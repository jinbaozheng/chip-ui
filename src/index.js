'use strict';

import { version } from '../package.json';
import Button from '../packages/button';
import Toast from '../packages/toast';
// import '../src/assets/font/iconfont.css';

const install = function(Vue, config = {}) {
    if (install.installed) return;
    Vue.component(Button.name, Button);
    Vue.$chips = Vue.prototype.$chips = function () {
        console.log('welcome to chips world')
    }
    Vue.prototype.$toast = Toast;
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    version,
    Button,
};
