'use strict';

import { version } from '../package.json';
import Button from '../packages/button';
import Header from '../packages/header'
import Toast from '../packages/toast';
// import _ from 'lodash'
// import '../src/assets/font/iconfont.css';

const install = function(Vue, config = {}) {
    if (install.installed) return;
    Vue.component(Button.name, Button);
    Vue.component(Header.name, Header);
    Vue.$chips = Vue.prototype.$chips = function () {
        console.log('welcome to chips world')
    }
    Vue.$toast = Vue.prototype.$toast = Toast;
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    install,
    version,
    Button,
    Header
};

export default {
    install,
    version,
    Button,
    Header
};
