import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

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
