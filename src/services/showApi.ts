import { get } from './index.ts';
import { fetchEpisodes } from './episodeApi.ts';
import { transformShowData } from '../middleware/transformShowData.ts';
import { transformShowListData } from '../middleware/trasnformShowListData.ts';
import { Show, ShowDetails, ShowDTO, ShowListDTO } from '../interfaces/Data';

export const fetchShow = async (id: string): Promise<ShowDetails | {}> => {
  const data: ShowDTO = await get(`/shows/${id}`);
  if (!data) {
    return {};
  }

  const show = transformShowData(data);
  const episodes = fetchEpisodes(id);

  const showData = { ...show, episodes: episodes };
  return showData;
};

export const fetchShows = async (query: string): Promise<Show[] | []> => {
  const data: ShowListDTO[] = await get(`/search/shows?q=${query}`);
  if (!data) {
    return [];
  }

  return transformShowListData(data);
};
