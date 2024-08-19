import { get } from './index.ts';
import { transformEpisodeListData } from '../middleware/trasnformEpisodeListData.ts';
import { transformEpisodeData } from '../middleware/trasnformEpisodeData.ts';

import { Episode, EpisodeDTO, Show } from '../interfaces/Data';

export const fetchEpisodes = async (showId: string): Promise< Show[] | []> => {
  const data: EpisodeDTO[] = await get(`/shows/${showId}/episodes`);
  return transformEpisodeListData(data);
};

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
