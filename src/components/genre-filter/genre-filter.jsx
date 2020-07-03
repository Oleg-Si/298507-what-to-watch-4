import React from 'react';
import PropTypes from 'prop-types';

const GenreFilter = (props) => {
  const {genre, activeGenre, onGenreCilck} = props;
  const genreArr = Array.from(genre);

  return (
    <ul className="catalog__genres-list">
      {genreArr.map((el, i) => {
        return (
          <li className={`catalog__genres-item ${el === activeGenre && `catalog__genres-item--active`}`} key={`genre-${i}`}>
            <a href="#" className="catalog__genres-link" onClick={(evt) => {
              evt.preventDefault();
              onGenreCilck(el);
            }}>{el}</a>
          </li>
        );
      })}

    </ul>
  );
};

GenreFilter.propTypes = {
  genre: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreCilck: PropTypes.func.isRequired
};

export default GenreFilter;
