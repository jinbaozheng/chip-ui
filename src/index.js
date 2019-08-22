'use strict';

import { version } from '../package.json';
import Button from '../packages/button';
import Header from '../packages/header';
import Cell from '../packages/cell';
import Toast from '../packages/toast';
import Indicator from '../packages/indicator'
import {MessageBox, messageBox} from '../packages/messageBox'
import 'cola.css'

const install = function(Vue, config = {}) {
    if (install.installed) return;
    Vue.component(Button.name, Button);
    Vue.component(Header.name, Header);
    Vue.component(Cell.name, Cell);
    Vue.component(MessageBox.name, MessageBox);
    Vue.$chips = Vue.prototype.$chips = function () {
        console.log('welcome to chips world')
    };
    Vue.$toast = Vue.prototype.$toast = Toast;
    Vue.$indicator = Vue.prototype.$indicator = Indicator;
    Vue.$messageBox = Vue.prototype.$messageBox = messageBox;
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
