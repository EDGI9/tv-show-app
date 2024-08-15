import { fetchEpisode } from '../../services/episodeApi.ts';

const state = {
    episode: {}
};

const mutations = {
    SET_EPISODE(state, payload) {
        state.episode = payload;
    },
}

const actions = {
    async GET_EPISODE({ commit }, payload) {
        const data = await fetchEpisode(payload.id, payload.seasonId, payload.episodeId)
        commit('SET_EPISODE', data);
    },
}


const episodeStore = {
  namespaced: true,
  state,
  mutations,
  actions
};

export default episodeStore;