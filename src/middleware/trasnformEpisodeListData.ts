import { EpisodeDTO , Episode} from "../interfaces/Data";

export function transformEpisodeData(data: any): Episode | []{
    if (!data) {
        return []
    }

    const processedData = data.map((item: EpisodeDTO) => ({
        id: item.id || '',
        name: item.name || '',
        summary: item.summary || '',
        image: item.image.original || '',
        season: item.season || ''
    }));
    
    return processedData;
}