import { ShowDTO, Show } from '../interfaces/Data';

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
