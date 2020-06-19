import React from 'react';
import PropTypes from 'prop-types';

const IMG_SETTINGS = {
  width: 280,
  height: 175
};

const FilmCard = (props) => {
  const {film, onFilmCardMouseEnter, onFilmCardTitleClick} = props;
  const {title, img} = film;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => {
      onFilmCardMouseEnter(film);
    }}>
      <div className="small-movie-card__image">
        <img src={img} alt={title} width={IMG_SETTINGS.width} height={IMG_SETTINGS.height}/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick={onFilmCardTitleClick}>{title}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }),
  onFilmCardMouseEnter: PropTypes.func.isRequired,
  onFilmCardTitleClick: PropTypes.func.isRequired
};

export default FilmCard;
