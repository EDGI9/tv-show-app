import { describe, it, expect } from 'vitest';
import { transformShowData } from '../../middleware/transformShowData';
import { Show, ShowDTO } from '../../interfaces/Data';
import  {invalidShowDTO as mockInvalidShowDTO, validShowDTO as mockValidShowDTO} from "../../__mocks__/middleware/showDto";

const validShowDTO: ShowDTO = mockValidShowDTO;

const invalidShowDTO = mockInvalidShowDTO;

describe('transformShowData', () => {
  it('Should transform valid ShowDTO into Show object', () => {
    const result = transformShowData(validShowDTO);
    const expectedResult: Show = {
      id: '1',
      name: 'My Show',
      summary: 'Show summary',
      image: 'http://image.url',
      rating: 29,
    }

    expect(result).toEqual(expectedResult);
  });

  it('Should return default values when properties are missing', () => {
    //@ts-ignore
    const result = transformShowData(invalidShowDTO);

    const expectedResult: Show = {
      id: '1',
      name: '',
      summary: '',
      image: '',
      rating: 0,
    }

    expect(result).toEqual(expectedResult);
  });

  it('Should return an empty object when data is null', () => {
    //@ts-ignore
    const result = transformShowData(null);

    expect(result).toEqual({});
  });

  it('Should return an empty object when data is undefined', () => {
    //@ts-ignore
    const result = transformShowData(undefined);

    expect(result).toEqual({});
  });
});