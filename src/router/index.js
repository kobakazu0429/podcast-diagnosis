import Vue from 'vue';
import Router from 'vue-router';

import Top from '@/pages/top';
import Class from '@/pages/class';
import Result from '@/pages/result';
import Share from '@/pages/share';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Top },
    { path: '/top', component: Top },
    { path: '/class/5/5', redirect: '/result' },
    { path: '/class/6/0', redirect: '/result' },
    { path: '/class/:class/:id', name: Class, component: Class },
    { path: '/result', component: Result },
    { path: '/share', component: Share }
  ]
});
