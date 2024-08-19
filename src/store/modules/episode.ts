import { fetchEpisode } from '../../services/episodeApi.ts';

const state = {
  episode: {},
};

const mutations = {
  //@ts-ignore
  SET_EPISODE(state, payload) {
    state.episode = payload;
  },
};

const actions = {
  //@ts-ignore
  async GET_EPISODE({ commit }, payload) {
    const data = await fetchEpisode(
      payload.id,
      payload.seasonId,
      payload.episodeId
    );
    commit('SET_EPISODE', data);
  },
};

const getters = {
  //@ts-ignore
  EPISODE(state) {
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
