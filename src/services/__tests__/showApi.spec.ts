import { describe, it, expect, vi } from 'vitest';
import { fetchShow, fetchShows } from '../showApi.ts';
import { get } from '../index.ts';
import { fetchEpisodes } from '../episodeApi.ts';
import { transformShowData } from '../../middleware/transformShowData.ts';
import { transformShowListData } from '../../middleware/transformShowListData.ts';

import {
  validShowDTO,
  transformedValidShowDTO,
} from '../../__mocks__/middleware/showDto.ts';
import { validEpisodeDTO } from '../../__mocks__/middleware/episodeDto.ts';

import {
  ShowDTO,
  ShowListDTO,
  ShowDetails,
  Show,
  EpisodeDTO,
} from '../../interfaces/Data';

const mockShowId: string = '1';
const mockQuery: string = 'test';

vi.mock('../index.ts', () => ({
  get: vi.fn(),
}));

vi.mock('../episodeApi.ts', () => ({
  fetchEpisodes: vi.fn(),
}));

vi.mock('../../middleware/transformShowData.ts', () => ({
  transformShowData: vi.fn(),
}));

vi.mock('../../middleware/transformShowListData.ts', () => ({
  transformShowListData: vi.fn(),
}));

describe('fetchShow', () => {
  it('Should fetch show details and transform them, including episodes', async () => {
    const url: string = `/shows/${mockShowId}`;
    const mockData: ShowDTO = validShowDTO;
    const transformedShow: Show = transformedValidShowDTO;
    const mockEpisodes: EpisodeDTO[] = [validEpisodeDTO];
    const expectedShowData: ShowDetails = {
      ...transformedShow,
      episodes: mockEpisodes,
    };

    //@ts-ignore vi.Mock
    (get as vi.Mock).mockResolvedValue(mockData);
    //@ts-ignore vi.Mock
    (transformShowData as vi.Mock).mockReturnValue(transformedShow);
    //@ts-ignore vi.Mock
    (fetchEpisodes as vi.Mock).mockResolvedValue(mockEpisodes);

    const result = await fetchShow(mockShowId);

    expect(get).toHaveBeenCalledWith(url);
    expect(transformShowData).toHaveBeenCalledWith(mockData);
    expect(fetchEpisodes).toHaveBeenCalledWith(mockShowId);
    expect(result).toEqual(expectedShowData);
  });

  it('Should return an empty object if no show data is fetched', async () => {
    //@ts-ignore vi.Mock
    (get as vi.Mock).mockResolvedValue(null);

    const result = await fetchShow(mockShowId);

    expect(result).toEqual({});
  });
});

describe('fetchShows', () => {
  it('Should fetch shows based on query and transform them', async () => {
    const url: string = `/search/shows?q=${mockQuery}`;
    const mockData: ShowListDTO[] = [{ show: validShowDTO }];
    const transformedData: Show[] = [transformedValidShowDTO];

    //@ts-ignore vi.Mock
    (get as vi.Mock).mockResolvedValue(mockData);
    //@ts-ignore vi.Mock
    (transformShowListData as vi.Mock).mockReturnValue(transformedData);

    const result = await fetchShows(mockQuery);

    expect(get).toHaveBeenCalledWith(url);
    expect(transformShowListData).toHaveBeenCalledWith(mockData);
    expect(result).toEqual(transformedData);
  });

  it('Should return an empty array if no shows are fetched', async () => {
    //@ts-ignore vi.Mock
    (get as vi.Mock).mockResolvedValue(null);

    const result = await fetchShows(mockQuery);

    expect(result).toEqual([]);
  });
});
