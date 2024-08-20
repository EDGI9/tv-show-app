import { ShowListDTO } from '../../interfaces/Data';
import { validShowDTO, invalidShowDTO as mockInvalidShowDTO } from './showDto';

export const validShowListDTO: ShowListDTO[] = [
  {
    show: validShowDTO,
  },
];

export const invalidShowDTO = [
  {
    show: mockInvalidShowDTO,
  },
];
