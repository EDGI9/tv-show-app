import { get } from "./index.ts";
import { transformEpisodeData } from '../middleware/trasnformEpisodeListData.ts';
import { ShowDTO } from "../interfaces/Data";

export const fetchEpisodes = async (showId: string): Promise<ShowDTO | {}> => {
    const data = await get(`/shows/${showId}/episodes`);
    return transformEpisodeData(data);
};

export const fetchEpisode = async (showId: string, seasonId: string, episodeId: string): Promise<ShowDTO | {}> => {
    const data = await get(`/shows/${showId}/episodebynumber?season=${seasonId}&number=${episodeId}`);
    return data;
};