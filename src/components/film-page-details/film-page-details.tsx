import * as React from 'react';
import {FilmInterface} from './../../types';

interface Props {
  filmInfo: FilmInterface;
}

const FilmPageDetalis: React.FC<Props> = (props: Props) => {
  const {filmInfo} = props;

  const getDurationFromMins = (min: number) => {
    return `${Math.trunc(min / 60)}h ${(min % 60)}m`;
  };

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{filmInfo.director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {filmInfo.starring.map((el: string) => el)}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{getDurationFromMins(filmInfo.runTime)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{filmInfo.genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{filmInfo.releaseDate}</span>
        </p>
      </div>
    </div>
  );
};

export default FilmPageDetalis;
