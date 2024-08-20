import { Episode, Show, ShowDetails } from '../interfaces/Data';

export type showState = {
  show: ShowDetails;
  shows: Show[];
};

export type episodeState = {
  episode: Episode;
};
