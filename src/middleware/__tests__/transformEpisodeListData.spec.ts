import { describe, it, expect } from 'vitest';
import { transformEpisodeListData } from '../transformEpisodeListData';
import { EpisodeDTO, Episode } from '../../interfaces/Data';

import  {invalidEpisodeDTO as mockInvalidEpisodeDTO, validEpisodeDTO as mockValidEpisodeDTO} from "../../__mocks__/middleware/episodeDto";

const validEpisodeListDTO: EpisodeDTO[] = [mockValidEpisodeDTO];

const invalidEpisodeLisDTO = [mockInvalidEpisodeDTO];

describe('transformEpisodeListData', () => {
  it('should transform valid EpisodeDTO array into Episode array', () => {
    const result = transformEpisodeListData(validEpisodeListDTO);
    const expectedResult: Episode[] = [{
        id: '1',
        name: 'My Episode',
        summary: 'Episode summary',
        image: 'http://image.url',
        season: '1',
        number: '1',
        airdate: '2022-01-01',
        runtime: 60,
        rating:29 
      }];

    expect(result).toEqual(expectedResult);
  });

  it('should return default values for missing properties in the EpisodeDTO array', () => {
    //@ts-ignore
    const result = transformEpisodeListData(invalidEpisodeLisDTO);
    const expectedResult: Episode[] = [{
        id: '1',
        name: '',
        summary: '',
        image: '',
        season: '',
        number: '',
        airdate: '',
        runtime: 0,
        rating: 0,
    }];

    expect(result).toEqual(expectedResult);
  });

  it('should return an empty array when data is null', () => {
    //@ts-ignore
    const result = transformEpisodeListData(null);

    expect(result).toEqual([]);
  });

  it('should return an empty array when data is undefined', () => {
    //@ts-ignore
    const result = transformEpisodeListData(undefined);

    expect(result).toEqual([]);
  });

  it('should return an empty array when data is an empty array', () => {
    const result = transformEpisodeListData([]);

    expect(result).toEqual([]);
  });
});