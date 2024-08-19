import { ShowDTO } from '../../interfaces/Data';

export const validShowDTO: ShowDTO = {
  id: '1',
  name: 'My Show',
  summary: 'Show summary',
  image: {
    original: "http://image.url"
  },
  rating: {
    average: 29
  },
};

export const invalidShowDTO = {
    id: '1',
    name: '',
    summary: '',
    image: null,
    rating: null,
  };
