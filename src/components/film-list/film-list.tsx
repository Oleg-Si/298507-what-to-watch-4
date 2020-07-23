import * as React from 'react';
import FilmCard from '../film-card/film-card';

const FilmList = (props) => {
  const {
    films,
    onFilmCardTitleClick,
    filmsCount
  } = props;

  const filmsForRender = films.slice(0, filmsCount);

  return (
    <div className="catalog__movies-list">
      {filmsForRender.map((film) => (
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

FilmList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
      })
  ).isRequired,
  onFilmCardTitleClick: PropTypes.func.isRequired,
  filmsCount: PropTypes.number.isRequired
};

export default FilmList;
