import { createRouter, createWebHistory } from 'vue-router';
// @ts-ignore
import { useStore } from 'vuex';

import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//@ts-ignore
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
      await store.dispatch('showStore/GET_SHOW', to.params.id);
      await store.dispatch('episodeStore/GET_EPISODE', params);
    }
    
    next();
  } catch (error) {
    console.error('Error during navigation:', error);
    next("/error"); 
  }
});

export default router;