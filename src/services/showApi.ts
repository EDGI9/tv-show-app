import { get } from './index.ts';
import { fetchEpisodes } from './episodeApi.ts';
import { transformShowData } from '../middleware/transformShowData.ts';
import { transformShowListData } from '../middleware/transformShowListData.ts';
import { Show, ShowDetails, ShowDTO, ShowListDTO } from '../interfaces/Data';

 /**
 * Fetches show details from api and transforms it to a different data object
 * @param id string
 */
export const fetchShow = async (id: string): Promise<ShowDetails | {}> => {
  const data: ShowDTO = await get(`/shows/${id}`);
  if (!data) {
    return {};
  }
 
  const show = transformShowData(data);
  const episodes = await fetchEpisodes(id);

  const showData = { ...show, episodes: episodes };
  return showData;
};

/**
 * Fetches shows from api using a query string and returns a list of different data objects
 * @param query string
 * returns ShowDetails
 */
export const fetchShows = async (query: string): Promise<Show[] | []> => {
  const data: ShowListDTO[] = await get(`/search/shows?q=${query}`);
  if (!data) {
    return [];
  }

  return transformShowListData(data);
};
