import { describe, it, expect, vi } from 'vitest';
import { fetchEpisodes, fetchEpisode } from '../episodeApi.ts';
import { get } from '../index.ts';
import { transformEpisodeListData } from '../../middleware/transformEpisodeListData';
import { transformEpisodeData } from '../../middleware/transformEpisodeData';

import { validEpisodeDTO , transformedValidEpisodeDTO } from "../../__mocks__/middleware/episodeDto.ts";
import { EpisodeDTO, Episode } from "../../interfaces/Data";

describe('fetchEpisodes', () => {
});