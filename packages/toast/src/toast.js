import Vue from 'vue';
import toast from './toast.vue'

const ToastConstructor = Vue.extend(toast);
let toastPool = [];

/*
单例模式
*/
let getAnInstance = () => {
    if (toastPool.length > 0) {
        let instance = toastPool[0];
        toastPool.splice(0, 1);
        return instance;
    }
    return new ToastConstructor({
        el: document.createElement('div')
    });
};

let returnAnInstance = instance => {
    if (instance) {
        toastPool.push(instance);
    }
};

let removeDom = event => {
    console.log('remove')
    if (event.target.parentNode) {
        event.target.parentNode.removeChild(event.target);
    }
};

ToastConstructor.prototype.close = function () {
    this.visible = false;
    this.$el.addEventListener('transitionend', removeDom);
    this.closed = true;
    returnAnInstance(this);
};

let Toast = (options = {}) => {
    let duration = options.duration || 3000;
    let instance = getAnInstance();
    instance.closed = false;
    clearTimeout(instance.timer);
    instance.message = typeof options === 'string' ? options : options.message;
    instance.position = options.position || 'middle';
    instance.className = options.className || '';
    instance.iconClass = options.iconClass || '';
    document.body.appendChild(instance.$el);
    document.body.appendChild(document.createElement('div'))
    Vue.nextTick(function () {
        instance.visible = true;
        console.log(instance);
        instance.$el.removeEventListener('transitionend', removeDom);
        ~duration && (instance.timer = setTimeout(function () {
            if (instance.closed) return;
            console.log('close0')
            instance.close();
        }, duration));
    });
    return instance;
};

export default Toast;
