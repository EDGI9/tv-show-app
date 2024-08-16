import { fetchShow } from '../../services/showApi.ts';

const state = {
    show: {}
};

const mutations = {
    //@ts-ignore
    SET_SHOW(state, payload) {
        state.show = payload;
    },
}

const actions = {
    //@ts-ignore
    async GET_SHOW({ commit }, id: string) {
        const data = await fetchShow(id)
        commit('SET_SHOW', data);
    },
}

const getters = {
    //@ts-ignore
    SHOW (state) {
        return state.show
    },
    //@ts-ignore
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