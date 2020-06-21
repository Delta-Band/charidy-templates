import Vue from 'vue';
import Router from 'vue-router';
import Wizard from '@/components/wizard/Wizard';
import Cover from '@/components/wizard/cover/Cover';
import GoalTime from '@/components/wizard/goal-time/GoalTime';
import Story from '@/components/wizard/story/Story';
import Levels from '@/components/wizard/levels/Levels';
import Teams from '@/components/wizard/teams/Teams';
import Matchers from '@/components/wizard/matchers/Matchers';
import Customize from '@/components/wizard/customize/Customize';

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
        {
          path: 'story',
          name: 'wizard-story',
          component: Story,
        },
        {
          path: 'levels',
          name: 'wizard-levels',
          component: Levels,
        },
        {
          path: 'teams',
          name: 'wizard-teams',
          component: Teams,
        },
        {
          path: 'matchers',
          name: 'wizard-matchers',
          component: Matchers,
        },
        {
          path: 'customize',
          name: 'wizard-customize',
          component: Customize,
        },
      ],
    },
    {
      path: '*',
      redirect: '/wizard',
    },
  ],
});