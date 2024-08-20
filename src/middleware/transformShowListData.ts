import { ShowListDTO, Show } from '../interfaces/Data';

/**
 * Transform a list of ShowList data to an array of Show data to be used by the vue application
 * @param data ShowListDTO[]
 *
 */
export function transformShowListData(data: ShowListDTO[]): Show[] | [] {
  if (!data) {
    return [];
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
