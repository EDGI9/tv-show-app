import { get } from './index.ts';
import { transformEpisodeListData } from '../middleware/transformEpisodeListData.ts';
import { transformEpisodeData } from '../middleware/transformEpisodeData.ts';

import { Episode, EpisodeDTO, Show } from '../interfaces/Data';

/**
 * Async function that fetches a list of Episode data from the api and returns an array of transformed data objects
 * @param showId string
 *
 */
export const fetchEpisodes = async (showId: string): Promise<Show[] | []> => {
  const data: EpisodeDTO[] = await get(`/shows/${showId}/episodes`);
  return transformEpisodeListData(data);
};

/**
 * Async function that fetches Episode data from the api and returns a transformed data object
 * @param showId string
 * @param seasonId string
 * @param episodeId string
 *
 */
export const fetchEpisode = async (
  showId: string,
  seasonId: string,
  episodeId: string
): Promise<Episode | {}> => {
  const data: EpisodeDTO = await get(
    `/shows/${showId}/episodebynumber?season=${seasonId}&number=${episodeId}`
  );
  return transformEpisodeData(data);
};
