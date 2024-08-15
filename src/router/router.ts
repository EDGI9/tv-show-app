import { createRouter, createWebHistory } from 'vue-router';
import { useStore } from 'vuex';
import BaseLayout from '../layouts/BaseLayout.vue';

import Home from '../views/Home.vue';
import Show from '../views/Show.vue';
import Episode from '../views/Episode.vue';
import MissingPage from '../views/MissingPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: BaseLayout,
    children: [
      {
        path: '',
        name: 'HomeChild',
        component: Home,
      },
    ]
  },
  {
    path: '/shows/:id',
    name: 'Shows',
    component: BaseLayout,
    children: [
      {
        path: '',
        name: 'Show',
        component: Show,
      },
      {
        path: 'episodebynumber',
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
    path: '/error',
    name: 'Error',
    component: BaseLayout,
    children: [
      {
        path: '',
        name: 'MissingPage',
        component: MissingPage,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const store = useStore();
  try {
    if (!to.name) {
      next("/error"); 
    }

    if (to.name === 'Show' && to.params.id) {
      await store.dispatch('showStore/GET_SHOW', to.params.id);
    } 

    if (to.name === 'Episode' && to.params.id && to.query.season && to.query.number) {
      const params = {
        id: to.params.id,
        seasonId: to.query.season,
        episodeId: to.query.number
      };
      await store.dispatch('episodeStore/GET_EPISODE', params);
    }
    
    next();
  } catch (error) {
    console.error('Error during navigation:', error);
    next("/error"); 
  }
});

export default router;