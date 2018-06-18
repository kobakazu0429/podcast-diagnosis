import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.config.devtools = true;

// -------------
// Component
import RadarChart from '@/components/radar-chart';
import CheckboxButton from '@/components/checkbox-button';

Vue.component('radar-chart', RadarChart);
Vue.component('checkbox-button', CheckboxButton);

/* eslint-disable no-new */

window.addEventListener('touchmove', function(event) {
  console.log('hoge');
  event.preventDefault();
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
