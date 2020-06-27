import React from 'react';
import PropTypes from 'prop-types';
import withVideoPlayer from './../../hocs/with-video-player.jsx';

const FilmCard = (props) => {
  const {film, onPlay, onStop, onFilmCardMouseEnter, onFilmCardTitleClick} = props;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => {
      onPlay();
      onFilmCardMouseEnter(film);
    }} onMouseLeave={() => {
      onStop();
    }}>

      <div className="small-movie-card__image">
        {props.children}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick={(evt) => {
          evt.preventDefault();
          onFilmCardTitleClick(film);
        }}>{film.title}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }),
  children: PropTypes.node.isRequired,
  onFilmCardTitleClick: PropTypes.func.isRequired,
  onFilmCardMouseEnter: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired
};

export const defaultFilmCard = FilmCard;
export default withVideoPlayer(FilmCard);
