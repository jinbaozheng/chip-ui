import Vue from 'vue';
import indicator from './indicator.vue'

const Indicator = Vue.extend(indicator);
let instance;

export default {
  open(options = {}) {
    if (!instance) {
      instance = new Indicator({
        el: document.createElement('div')
      });
        instance.text = typeof options === 'string' ? options : options.text || '';
        document.body.appendChild(instance.$el);
    } else {
        if (instance.visible) return;
        instance.text = typeof options === 'string' ? options : options.text || '';
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
