import Vue from 'vue';
import messageBox from './messageBox.vue'

const MessageBox = Vue.extend(messageBox);
let instance;

export default {
    open(options = {}) {
        if (!instance) {
            instance = new MessageBox({
                el: document.createElement('div')
            });
            instance.title = options.title || '提示';
            instance.message = typeof options === 'string' ? options : options.message || '';
            instance.type = options.type || 'alert';
            instance.disabled = options.disabled || false;
            instance.confirmHandle = options.confirmHandle || function() {};
            instance.cancelHandle = options.cancelHandle || function() {};
            instance.cancelButtonText = options.cancelButtonText || '取消';
            instance.confirmButtonText = options.confirmButtonText || '确定';
            instance.closeHandle = options.closeHandle || function() {};
            document.body.appendChild(instance.$el);
        } else {
            if (instance.visible) return;
            instance.message = typeof options === 'string' ? options : options.message || '';
        }
        Vue.nextTick(() => {
            instance.visible = true;
        });
    },

    close() {
        if (instance) {
            instance.visible = false;
        }
    }
};
