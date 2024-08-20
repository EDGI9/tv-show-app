import { describe, it, expect, vi } from 'vitest';
import { fetchShow, fetchShows } from '../showApi.ts';
import { get } from '../index.ts';
import { fetchEpisodes } from '../episodeApi.ts';
import { transformShowData } from '../../middleware/transformShowData.ts';
import { transformShowListData } from '../../middleware/transformShowListData.ts';

import { validShowDTO , transformedValidShowDTO } from "../../__mocks__/middleware/showDto.ts";
import { validEpisodeDTO } from "../../__mocks__/middleware/episodeDto.ts";

import { ShowDTO, ShowListDTO, ShowDetails, Show, EpisodeDTO } from '../../interfaces/Data';

describe('fetchShow', () => {
});