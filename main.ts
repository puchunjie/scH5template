import Vue from 'vue';
import App from './App.vue';
import { router } from './router/index';
import store from './store';
import '@/utils/remfit.js';
import * as filters from '@/fliters/index.ts'
import '@/assets/styles/reset.css';
import * as globalComponents from '@/utils/globalComponents'
const FastClick = require('fastclick')
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css';
import Vuerify from 'vuerify'
import { ScEnumKeys, ScEnums } from '@/utils/enums'
import '@/utils/axiosInit'


if ('addEventListener' in document && 'ontouchstart' in window) {
  FastClick.prototype.focus = function (targetElement) {
    targetElement.focus()
  }
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

Vue.use(mandMobile);
Vue.use(Vuerify);

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Object.keys(globalComponents).forEach(key => {
  Vue.component(key, globalComponents[key])
});

Vue.config.productionTip = false;
Vue.prototype.ScEnumKeys = ScEnumKeys;
Vue.prototype.ScEnums = ScEnums;
Vue.prototype.$clearData = obj => JSON.parse(JSON.stringify(obj));
Vue.prototype.$setTitle = title => document.title = title;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
