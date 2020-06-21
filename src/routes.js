import Vue from 'vue';
import Router from 'vue-router';
import Wizard from '@/components/wizard/Wizard';
import Cover from '@/components/wizard/cover/Cover';
import GoalTime from '@/components/wizard/goal-time/GoalTime';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/wizard',
      name: 'wizard',
      component: Wizard,
      children: [
        {
          path: '',
          name: 'wizard-cover',
          component: Cover,
        },
        {
          path: 'goal-and-time',
          name: 'wizard-goal-and-time',
          component: GoalTime,
        },
      ],
    },
    {
      path: '*',
      redirect: '/wizard',
    },
  ],
});