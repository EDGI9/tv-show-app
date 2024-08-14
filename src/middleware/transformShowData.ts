import { ShowDTO, Show } from "../interfaces/Data";

export function transformShowData(data: ShowDTO): Show | {}{
    if (!data) {
        return {}
    }
    
    const {id, name, summary, image} = data;
    const processedData = {
        id: id || '',
        name: name || '',
        summary: summary || '',
        image: image.original || ''
    }
    
    return processedData;
}