import { EpisodeDTO } from '../../interfaces/Data';
import {
  validEpisodeDTO,
  invalidEpisodeDTO as mockInvalidEpisodeDTO,
} from './episodeDto';

export const validEpisodeListDTO: EpisodeDTO[] = [validEpisodeDTO];

export const invalidEpisodeDTO = [mockInvalidEpisodeDTO];
