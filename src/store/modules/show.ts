import { fetchShow } from '../../services/showApi.ts';

const state = {
    show: {}
};

const mutations = {
    SET_SHOW(state, payload) {
        state.show = payload;
    },
}

const actions = {
    async GET_SHOW({ commit }, id: string) {
        const data = await fetchShow(id)
        commit('SET_SHOW', data);
    },
}

const getters = {
    SHOW (state) {
        return state.show
    },
    EPISODES (state) {
        return state.show.episodes
    }
}


const showStore = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default showStore;