import { EpisodeDTO, Episode } from '../interfaces/Data';

/**
   * Transform a list of Episode data to an array of Episode data to be used by the vue application
   * @param data EpisodeDTO[]
   * 
   */
export function transformEpisodeListData(data: EpisodeDTO[]): Episode[] | [] {
  if (!data) {
    return [];
  }

  const processedData: Episode[] = data.map((item: EpisodeDTO) => ({
    id: item.id || '',
    name: item.name || '',
    summary: item.summary || '',
    image: item.image?.original || '',
    season: item.season || '',
    number: item.number || '',
    airdate: item.airdate || '',
    runtime: item.runtime || 0,
    rating: item.rating?.average || 0,
  }));

  return processedData;
}
