import { Show, ShowDTO } from '../../interfaces/Data';

export const validShowDTO: ShowDTO = {
  id: '1',
  name: 'My Show',
  summary: 'Show summary',
  image: {
    original: 'http://image.url',
  },
  rating: {
    average: 29,
  },
};

export const invalidShowDTO = {
  id: '1',
  name: '',
  summary: '',
  image: null,
  rating: null,
};

export const transformedValidShowDTO: Show = {
  id: '1',
  name: 'My Show',
  summary: 'Show summary',
  image: 'http://image.url',
  rating: 29,
};

export const transformedInvalidShowDTO: Show = {
  id: '1',
  name: '',
  summary: '',
  image: '',
  rating: 0,
};