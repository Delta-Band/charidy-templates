import Vue from 'vue';
import Router from 'vue-router';
import MyCampaigns from '@/pages/my-campaigns/MyCampaigns';
import CampaignEditor from '@/pages/campaign-editor/CampaignEditor';
import CampaignEditorCover from '@/pages/campaign-editor/cover/Cover';
import CampaignEditorGoalTime from '@/pages/campaign-editor/goal-time/GoalTime';
import CampaignEditorStory from '@/pages/campaign-editor/story/Story';
import CampaignEditorLevels from '@/pages/campaign-editor/levels/Levels';
import CampaignEditorTeams from '@/pages/campaign-editor/teams/Teams';
import CampaignEditorMatchers from '@/pages/campaign-editor/matchers/Matchers';
import CampaignEditorCustomize from '@/pages/campaign-editor/customize/Customize';

Vue.use(Router);
/* 
TODO:
MOVE WIZARD ROUTES TO BY SUBROUTES OF MY-CAMPAIGN
 */

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/my-campaigns',
      name: 'my-campaigns',
      component: MyCampaigns,
    },
    {
      path: '/my-campaigns',
      name: 'my-campaigns',
      component: MyCampaigns,
    },
    {
      path: '/:campaignId/editor',
      name: 'campaign-editor',
      component: CampaignEditor,
      children: [
        {
          path: 'cover',
          name: 'campaign-editor-cover',
          component: CampaignEditorCover,
        },
        {
          path: 'goal-and-time',
          name: 'campaign-editor-goal-and-time',
          component: CampaignEditorGoalTime,
        },
        {
          path: 'story',
          name: 'campaign-editor-story',
          component: CampaignEditorStory,
        },
        {
          path: 'levels',
          name: 'campaign-editor-levels',
          component: CampaignEditorLevels,
        },
        {
          path: 'teams',
          name: 'campaign-editor-teams',
          component: CampaignEditorTeams,
        },
        {
          path: 'matchers',
          name: 'campaign-editor-matchers',
          component: CampaignEditorMatchers,
        },
        {
          path: 'customize',
          name: 'campaign-editor-customize',
          component: CampaignEditorCustomize,
        },
      ],
    },
    {
      path: '*',
      redirect: '/my-campaigns',
    },
  ],
});