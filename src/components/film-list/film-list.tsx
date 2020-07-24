import * as React from 'react';
import FilmCard from '../film-card/film-card';
import {FilmInterface} from './../../types';

interface Props {
  films: Array<FilmInterface>;
  onFilmCardTitleClick: (film: FilmInterface) => void;
  filmsCount: number;
}

const FilmList: React.FC<Props> = (props: Props) => {
  const {
    films,
    onFilmCardTitleClick,
    filmsCount
  } = props;

  const filmsForRender = films.slice(0, filmsCount);

  return (
    <div className="catalog__movies-list">
      {filmsForRender.map((film: FilmInterface) => (
        <FilmCard
          film={film}
          onFilmCardTitleClick={onFilmCardTitleClick}
          key={film.id}
          isMuted={true}
        />
      ))}
    </div>
  );
};

export default FilmList;
