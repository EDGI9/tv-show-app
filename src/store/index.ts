// @ts-ignore
import { createStore } from 'vuex';
import showStore from './modules/show';
import episodeStore from './modules/episode';

export default createStore({
  modules: {
    showStore,
    episodeStore,
  },
});
