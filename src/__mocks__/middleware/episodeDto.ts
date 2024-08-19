import { EpisodeDTO } from '../../interfaces/Data';

export const validEpisodeDTO: EpisodeDTO = {
    id: '1',
    name: 'My Episode',
    summary: 'Episode summary',
    image: { original: 'http://image.url' },
    season: '1',
    number: '1',
    airdate: '2022-01-01',
    runtime: 60,
    rating: { average: 29 },
};

export const invalidEpisodeDTO = {
    id: '1',
    name: '',
    summary: '',
    image: null,
    season: null,
    number: null,
    airdate: '',
    runtime: null,
    rating: null,
};
