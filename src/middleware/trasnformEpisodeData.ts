import { EpisodeDTO , Episode} from "../interfaces/Data";

export function transformEpisodeData(data: any): Episode | []{
    if (!data) {
        return []
    }


    const {id, name, summary, image, season, airdate, runtime, rating } = data;
    const processedData = {
        id: id || '',
        name: name || '',
        summary: summary || '',
        image: image.original || '',
        season: season || '',
        airdate: airdate || '',
        runtime: runtime || 0,
        rating: rating.average || 0,
    }
    
    return processedData;
}