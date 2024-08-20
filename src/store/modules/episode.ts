//@ts-ignore
import { Store } from 'vuex';
import { fetchEpisode } from '../../services/episodeApi.ts';
import { episodeState } from '../../interfaces/Store';
import { Episode } from '../../interfaces/Data';

const state: episodeState = {
  episode: {
    id: '',
    name: '',
    summary: '',
    image: '',
    number: '',
    season: '',
    airdate: '',
    runtime: 0,
    rating: 0,
  },
};

const mutations = {
  /**
   * Set state
   * @param payload Episode
   *
   */
  SET_EPISODE(state: episodeState, payload: Episode) {
    state.episode = { ...payload };
  },
};

const actions = {
  /**
   * Fetch Episode data and store it in state
   * @param id string
   * @param seasonId string
   * @param episodeId string
   *
   */
  async GET_EPISODE(
    { commit }: { commit: Store<episodeState>['commit'] },
    payload: { id: string; seasonId: string; episodeId: string }
  ) {
    const data = await fetchEpisode(
      payload.id,
      payload.seasonId,
      payload.episodeId
    );
    commit('SET_EPISODE', data);
  },
};

const getters = {
  /**
   * Get Episode data
   */
  EPISODE(state: episodeState): Episode {
    return state.episode;
  },
};

const episodeStore = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default episodeStore;
