import { ShowListDTO , Show} from "../interfaces/Data";

export function transformShowListData(data: any): Show[] | []{
    if (!data) {
        return []
    }

    const processedData: Show[] = data.map((item: ShowListDTO) => ({
        id: item.show?.id || '',
        name: item.show?.name || '',
        summary: item.show?.summary || '',
        image: item.show?.image?.original || '',
        rating: item.show?.rating?.average || 0,
    }));
    
    return processedData;
}