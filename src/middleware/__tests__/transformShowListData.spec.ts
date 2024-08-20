import { describe, it, expect } from 'vitest';
import { transformShowListData } from '../transformShowListData';
import { ShowListDTO, Show } from '../../interfaces/Data';
import {
  invalidShowDTO as mockInvalidShowDTO,
  validShowListDTO as mockValidShowListDTO,
} from '../../__mocks__/middleware/showListDto';
import {
  transformedValidShowDTO as mockTransformedValidShowDTO,
  transformedInvalidShowDTO as mockTransformedInvalidShowDTO,
} from '../../__mocks__/middleware/showDto';

const validShowListDTO: ShowListDTO[] = mockValidShowListDTO;

const invalidShowListDTO = mockInvalidShowDTO;

describe('transformShowListData', () => {
  it('should transform valid ShowListDTO array into Show array', () => {
    const result = transformShowListData(validShowListDTO);
    const expectedResult: Show[] = [mockTransformedValidShowDTO];

    expect(result).toEqual(expectedResult);
  });

  it('should return default values for missing properties in the ShowListDTO array', () => {
    //@ts-ignore
    const result = transformShowListData(invalidShowListDTO);
    const expectedResult: Show[] = [mockTransformedInvalidShowDTO];

    expect(result).toEqual(expectedResult);
  });

  it('should return an empty array when data is null', () => {
    //@ts-ignore
    const result = transformShowListData(null);

    expect(result).toEqual([]);
  });

  it('should return an empty array when data is undefined', () => {
    //@ts-ignore
    const result = transformShowListData(undefined);

    expect(result).toEqual([]);
  });

  it('should return an empty array when data is an empty array', () => {
    const result = transformShowListData([]);

    expect(result).toEqual([]);
  });
});
