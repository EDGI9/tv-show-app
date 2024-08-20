import { describe, it, expect } from 'vitest';
import { transformEpisodeData } from '../transformEpisodeData';
import { Episode, EpisodeDTO } from '../../interfaces/Data';
import {
  invalidEpisodeDTO as mockInvalidEpisodeDTO,
  validEpisodeDTO as mockValidEpisodeDTO,
} from '../../__mocks__/middleware/episodeDto';

const validEpisodeDTO: EpisodeDTO = mockValidEpisodeDTO;

const invalidEpisodeDTO = mockInvalidEpisodeDTO;

describe('transformEpisodeData', () => {
  it('Should transform valid EpisodeDTO into Episode object', () => {
    const result = transformEpisodeData(validEpisodeDTO);
    const expectedResult: Episode = {
      id: '1',
      name: 'My Episode',
      summary: 'Episode summary',
      image: 'http://image.url',
      season: '1',
      number: '1',
      airdate: '2022-01-01',
      runtime: 60,
      rating: 29,
    };

    expect(result).toEqual(expectedResult);
  });

  it('Should return default values when properties are missing', () => {
    //@ts-ignore
    const result = transformEpisodeData(invalidEpisodeDTO);
    const expectedResult: Episode = {
      id: '1',
      name: '',
      summary: '',
      image: '',
      season: '',
      number: '',
      airdate: '',
      runtime: 0,
      rating: 0,
    };

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
