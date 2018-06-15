import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/pages/top';
import Class_a from '@/pages/class_a';
import Class_b from '@/pages/class_b';
import Class_c from '@/pages/class_c';
import Class_d from '@/pages/class_d';
import Class_e from '@/pages/class_e';
import Class_f from '@/pages/class_f';
import Result from '@/pages/result';
import Share from '@/pages/share';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Top },
    { path: '/class_a', component: Class_a },
    { path: '/class_b', component: Class_b },
    { path: '/class_c', component: Class_c },
    { path: '/class_d', component: Class_d },
    { path: '/class_e', component: Class_e },
    { path: '/class_f', component: Class_f },
    { path: '/result', component: Result },
    { path: '/share', component: Share }
  ]
});
