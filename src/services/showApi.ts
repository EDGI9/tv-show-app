import { get } from "./index.ts";
import { fetchEpisodes } from "./episodeApi.ts";
import { transformShowData } from '../middleware/transformShowData.ts';
import { transformShowListData } from '../middleware/trasnformShowListData.ts';
import { Show } from "../interfaces/Data";

export const fetchShow = async (id: string): Promise<Show | {}> => {
    const data = await get(`/shows/${id}`);
    if (!data) {
        return {}
    }
    
    const show = await transformShowData(data);
    const episodes = await fetchEpisodes(id);

    const showData = {...show, episodes: episodes}
    return showData
};

export const fetchShows = async (query: string): Promise<Show[] | []> => {
    const data = await get(`/search/shows?q=${query}`);
    if (!data) {
        return []
    }
    console.log(data);
    
    return await transformShowListData(data);
};