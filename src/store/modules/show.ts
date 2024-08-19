//@ts-ignore
import { Store } from 'vuex';
import { fetchShow, fetchShows } from '../../services/showApi.ts';
import { showState } from "../../interfaces/Store";
import { Episode, Show, ShowDetails } from '../../interfaces/Data';

const state : showState = {
  show: {
    id: '',
    name: '',
    summary: '',
    image: '',
    rating: 0,
    episodes: []
  },
  shows: [],
};

const mutations = {
  SET_SHOW(state: showState, payload: ShowDetails) {
    state.show = payload;
  },
  SET_SHOWS(state: showState, payload: Show[]) {
    state.shows = payload;
  },
};

const actions = {
  async GET_SHOW({ commit }: { commit: Store<showState>['commit'] }, id: string) {
    const data = await fetchShow(id);
    commit('SET_SHOW', data);
  },
  async GET_SHOWS({ commit }: { commit: Store<showState>['commit'] }, query: string) {
    const data = await fetchShows(query);
    commit('SET_SHOWS', data);
  },
};

const getters = {
  SHOW(state: showState): Show {
    return state.show;
  },
  SHOWS(state: showState): Show[] {
    return state.shows;
  },
  EPISODES(state: showState) : Episode[] {
    return state.show.episodes;
  },
};

const showStore = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default showStore;
