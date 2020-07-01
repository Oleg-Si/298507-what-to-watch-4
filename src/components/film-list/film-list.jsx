import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';

const FilmList = (props) => {
  const {films, onFilmCardTitleClick} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => (
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
  onFilmCardTitleClick: PropTypes.func.isRequired
};

export default FilmList;
