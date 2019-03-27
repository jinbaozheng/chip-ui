import toast from './toast.vue'
import Vue from 'vue'

const Toast = Vue.extend(toast);
let toastPool = [];
export default function (options) {
    let instance = new Toast({
        el: document.createElement('div')
    });
    instance.message = typeof options === 'string' ? options : options.message || '';
    instance.visible = true;
    toastPool.push(instance);
    document.body.appendChild(instance.$el);
    setTimeout(() => {
        instance.visible = false;
    }, options.duration || 1500);
    setTimeout(() => {
        document.body.removeChild(instance.$el);
        toastPool.shift(0);
    }, options.duration + 500 || 2000)
}
