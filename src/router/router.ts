import { createRouter, createWebHistory } from 'vue-router';
// @ts-ignore
import { useStore } from 'vuex';

import routes from './routes';

const baseUrl = import.meta.env.VITE_BASE_URL;

const router = createRouter({
  history: createWebHistory(`${baseUrl}/`),
  routes,
});

//@ts-ignore
router.beforeEach(async (to, from, next) => {
  const store = useStore();
  try {
    /**
     * If the name is invalid or non existing throw error
     * @param name string
     */
    if (!to.name) {
      throw new Error('Invalid route');
    }

    /**
     * Fetch Show data
     * @param name string
     * @param id string
     */
    if (to.name === 'Show' && to.params.id) {
      await store.dispatch('showStore/GET_SHOW', to.params.id);
    }

    /**
     * Fetch Show and singular Episode data
     * @param name string
     * @param id string
     * @param season string
     * @param number string
     */
    if (
      to.name === 'Episode' &&
      to.params.id &&
      to.query.season &&
      to.query.number
    ) {
      const params = {
        id: to.params.id,
        seasonId: to.query.season,
        episodeId: to.query.number,
      };
      await store.dispatch('showStore/GET_SHOW', to.params.id);
      await store.dispatch('episodeStore/GET_EPISODE', params);
    }

    next();
  } catch (error) {
    /**
     * Redirect to Error page
     */
    console.error('Error during navigation:', error);
    next('/error');
  }
});

export default router;
