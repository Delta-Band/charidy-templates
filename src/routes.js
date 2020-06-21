import Vue from 'vue';
import Router from 'vue-router';
import Wizard from '@/components/wizard/Wizard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/wizard',
      name: 'wizard',
      component: Wizard,
    },
    {
      path: '*',
      redirect: '/wizard',
    },
  ],
});