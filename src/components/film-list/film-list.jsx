import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';

const FilmList = (props) => {
  const {films, onFilmCardTitleClick, filmsCount} = props;
  const filmsForRender = [];

  for (let i = 0; i < filmsCount; i++) {
    if (films[i]) {
      filmsForRender.push(films[i]);
    }
  }

  return (
    <div className="catalog__movies-list">
      {filmsForRender.map((film) => (
        <FilmCard
          film={film}
          onFilmCardTitleClick={onFilmCardTitleClick}
          key={film.id}
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
