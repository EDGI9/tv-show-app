import { fetchShow, fetchShows } from '../../services/showApi.ts';

const state = {
    show: {},
    shows: {},
    
};

const mutations = {
    //@ts-ignore
    SET_SHOW(state, payload) {
        state.show = payload;
    },
    SET_SHOWS(state, payload) {
        state.shows = payload;
    },
}

const actions = {
    //@ts-ignore
    async GET_SHOW({ commit }, id: string) {
        const data = await fetchShow(id)
        commit('SET_SHOW', data);
    },
    //@ts-ignore
    async GET_SHOWS({ commit }, query: string) {
        const data = await fetchShows(query)
        commit('SET_SHOWS', data);
    },
}

const getters = {
    //@ts-ignore
    SHOW (state) {
        return state.show
    },
    //@ts-ignore
    SHOWS (state) {
        return state.shows
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