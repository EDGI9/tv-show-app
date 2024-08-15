import { fetchShow } from '../../services/showApi.ts';
import { Show } from "../../interfaces/Data.d.ts";

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
    EPISODES (state) {
        console.log(state, state.show);
        
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