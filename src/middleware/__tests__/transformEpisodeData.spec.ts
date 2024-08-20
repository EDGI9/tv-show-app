import { describe, it, expect } from 'vitest';
import { transformEpisodeData } from '../transformEpisodeData';
import { Episode, EpisodeDTO } from '../../interfaces/Data';
import {
  invalidEpisodeDTO as mockInvalidEpisodeDTO,
  validEpisodeDTO as mockValidEpisodeDTO,
  transformedValidEpisodeDTO as mockTransformedValidEpisodeDTO,
  transformedInvalidEpisodeDTO as mockTransformedInvalidEpisodeDTO
} from '../../__mocks__/middleware/episodeDto';

const validEpisodeDTO: EpisodeDTO = mockValidEpisodeDTO;

const invalidEpisodeDTO = mockInvalidEpisodeDTO;

describe('transformEpisodeData', () => {
  it('Should transform valid EpisodeDTO into Episode object', () => {
    const result = transformEpisodeData(validEpisodeDTO);
    const expectedResult: Episode = mockTransformedValidEpisodeDTO;

    expect(result).toEqual(expectedResult);
  });

  it('Should return default values when properties are missing', () => {
    //@ts-ignore
    const result = transformEpisodeData(invalidEpisodeDTO);
    const expectedResult: Episode = mockTransformedInvalidEpisodeDTO;

    expect(result).toEqual(expectedResult);
  });

  it('Should return an empty object when data is null', () => {
    //@ts-ignore
    const result = transformEpisodeData(null);

    expect(result).toEqual({});
  });

  it('Should return an empty object when data is undefined', () => {
    //@ts-ignore
    const result = transformEpisodeData(undefined);

    expect(result).toEqual({});
  });
});
