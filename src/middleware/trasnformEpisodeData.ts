import { Episode, EpisodeDTO } from '../interfaces/Data';

export function transformEpisodeData(data: EpisodeDTO): Episode | {} {
  if (!data) {
    return {};
  }

  const { id, name, summary, image, season, airdate, runtime, rating, number } =
    data;
  const processedData: Episode = {
    id: id || '',
    name: name || '',
    summary: summary || '',
    image: image?.original || '',
    season: season || '',
    number: number || '',
    airdate: airdate || '',
    runtime: runtime || 0,
    rating: rating?.average || 0,
  };

  return processedData;
}
