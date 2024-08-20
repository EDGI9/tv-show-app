import { describe, it, expect, vi } from 'vitest';
import { fetchEpisodes, fetchEpisode } from '../episodeApi.ts';
import { get } from '../index.ts';
import { transformEpisodeListData } from '../../middleware/transformEpisodeListData';
import { transformEpisodeData } from '../../middleware/transformEpisodeData';

import {
  validEpisodeDTO,
  transformedValidEpisodeDTO,
} from '../../__mocks__/middleware/episodeDto.ts';
import { EpisodeDTO, Episode } from '../../interfaces/Data';

const mockShowId: string = '1';
const mockSeasonId: string = '2';
const mockEpisodeId: string = '3';

vi.mock('../index.ts', () => ({
  get: vi.fn(),
}));

vi.mock('../../middleware/transformEpisodeListData.ts', () => ({
  transformEpisodeListData: vi.fn(),
}));

vi.mock('../../middleware/transformEpisodeData.ts', () => ({
  transformEpisodeData: vi.fn(),
}));

describe('fetchEpisodes', () => {
  it('Should fetch episode list data and transform it', async () => {
    const url: string = `/shows/${mockShowId}/episodes`;
    const mockData: EpisodeDTO[] = [validEpisodeDTO];
    const transformedData: Episode[] = [transformedValidEpisodeDTO];
    //@ts-ignore vi.Mock
    (get as vi.Mock).mockResolvedValue(mockData);
    //@ts-ignore vi.Mock
    (transformEpisodeListData as vi.Mock).mockReturnValue(transformedData);

    const result = await fetchEpisodes(mockShowId);

    expect(get).toHaveBeenCalledWith(url);
    expect(transformEpisodeListData).toHaveBeenCalledWith(mockData);
    expect(result).toEqual(transformedData);
  });

  it('Should return an empty array if no data is fetched', async () => {
    //@ts-ignore vi.Mock
    (get as vi.Mock).mockResolvedValue(null);
    //@ts-ignore vi.Mock
    (transformEpisodeListData as vi.Mock).mockReturnValue([]);

    const result = await fetchEpisodes(mockShowId);

    expect(result).toEqual([]);
  });
});

describe('fetchEpisode', () => {
  it('Should fetch single episode data and transform it', async () => {
    const url: string = `/shows/${mockShowId}/episodebynumber?season=${mockSeasonId}&number=${mockEpisodeId}`;
    const mockData: EpisodeDTO = validEpisodeDTO;
    const transformedData: Episode = transformedValidEpisodeDTO;
    //@ts-ignore vi.Mock
    (get as vi.Mock).mockResolvedValue(mockData);
    //@ts-ignore vi.Mock
    (transformEpisodeData as vi.Mock).mockReturnValue(transformedData);

    const result = await fetchEpisode(mockShowId, mockSeasonId, mockEpisodeId);

    expect(get).toHaveBeenCalledWith(url);
    expect(transformEpisodeData).toHaveBeenCalledWith(mockData);
    expect(result).toEqual(transformedData);
  });

  it('Should return an empty object if no data is fetched', async () => {
    //@ts-ignore vi.Mock
    (get as vi.Mock).mockResolvedValue(null);
    //@ts-ignore vi.Mock
    (transformEpisodeData as vi.Mock).mockReturnValue({});

    const result = await fetchEpisode(mockShowId, mockSeasonId, mockEpisodeId);

    expect(result).toEqual({});
  });
});
