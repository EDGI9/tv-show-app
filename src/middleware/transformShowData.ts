import { ShowDTO, Show } from '../interfaces/Data';

/**
 * Transform Show data to an object to be used the vue application
 * @param data ShowDTO{}
 *
 */
export function transformShowData(data: ShowDTO): Show | {} {
  if (!data) {
    return {};
  }

  const { id, name, summary, image, rating } = data;
  const processedData: Show = {
    id: id || '',
    name: name || '',
    summary: summary || '',
    image: image?.original || '',
    rating: rating?.average || 0,
  };

  return processedData;
}
