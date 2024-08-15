import { createRouter, createWebHistory } from 'vue-router';
import { useStore } from 'vuex';
import BaseLayout from '../layouts/BaseLayout.vue';

import Show from '../views/Show.vue';
import Episode from '../views/Episode.vue';
import MissingPage from '../views/MissingPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/shows',
  },
  {
    path: '/shows',
    name: 'Shows',
    component: BaseLayout,
    children: [
      {
        path: ':id',
        name: 'Show',
        component: Show,
      },
      {
        path: ':id/episodebynumber',
        name: 'Episode',
        component: Episode,
        props: route => ({
          season: route.query.season,
          episode: route.query.number,
        }),
      },
    ]
  },
  {
    path: '/404',
    name: 'Shows',
    component: MissingPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const store = useStore();
  try {
    if (to.name === 'Show' && to.params.id) {
      await store.dispatch('showStore/GET_SHOW', to.params.id);
    } else {
      // next("/404"); 
    }

    if (to.name === 'Episode' && to.params.id && to.query.season && to.query.number) {
      const params = {
        id: to.params.id,
        seasonId: to.query.season,
        episodeId: to.query.number
      };
      await store.dispatch('episodeStore/GET_EPISODE', params);
    } else {
      // next("/404"); 
    }

    next();
  } catch (error) {
    console.error('Error during navigation:', error);
    next(false);
  }
});

export default router;