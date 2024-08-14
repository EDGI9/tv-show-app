import { createRouter, createWebHistory } from 'vue-router';
import { useStore } from 'vuex';
import BaseLayout from '../layouts/BaseLayout.vue';

import Show from '../views/Show.vue';
import Episode from '../views/Episode.vue';

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
            children: [
              {
                  path: 'episodebynumber',
                  name: 'Episode',
                  component: Episode,
                  props: route => ({
                    seasonId: route.query.season,
                    episodeId: route.query.episode,
                  }),
              },
            ]
        },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const store = useStore();

  if (to.name === 'Show' && to.params.id) {
    store.dispatch('showStore/GET_SHOW', to.params.id);
  }

  if (to.name === 'Episode' && to.params.id && to.query.season && to.query.number) {
    const params = {
      id:to.params.id,
      seasonId: to.query.season,
      episodeId:to.query.number
    }
    store.dispatch('episodeStore/GET_EPISODE', params);
  }

  next();
});

export default router;