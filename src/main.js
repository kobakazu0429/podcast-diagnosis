import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import '@fortawesome/fontawesome-free-webfonts/css/fontawesome.css';

import '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css';
import '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css';

// import '../node_modules/normalize.css/normalize.css';

Vue.config.productionTip = false;
Vue.config.devtools = false;

// -------------
// Component
import RadarChart from '@/components/radar-chart';
import CheckboxButton from '@/components/checkbox-button';

Vue.component('radar-chart', RadarChart);
Vue.component('checkbox-button', CheckboxButton);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
