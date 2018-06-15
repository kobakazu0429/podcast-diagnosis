import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/pages/HelloWorld';
import HelloUnderWorld from '@/pages/HelloUnderWorld';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/page2',
      component: HelloUnderWorld
    }
  ]
});
