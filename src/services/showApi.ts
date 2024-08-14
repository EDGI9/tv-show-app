import { get } from "./index.ts";
import { fetchEpisodes } from "./episodeApi.ts";
import { transformShowData } from '../middleware/transformShowData.ts';
import { ShowDTO } from "../interfaces/Data";

export const fetchShow = async (id: string): Promise<ShowDTO | {}> => {
    const data = await get(`/shows/${id}`);
    if (!data) {
        return {}
    }
    
    const show = await transformShowData(data);
    const episodes = await fetchEpisodes(id);

    const showData = {...show, episodes: episodes}
    return showData
};