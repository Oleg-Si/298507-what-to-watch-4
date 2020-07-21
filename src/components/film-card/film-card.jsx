import React from 'react';
import PropTypes from 'prop-types';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.jsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants.js';

const FilmCard = (props) => {
  const {film, onPlay, onStop, onFilmCardTitleClick} = props;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => {
      onPlay();
    }} onMouseLeave={() => {
      onStop();
    }}>

      <div className="small-movie-card__image">
        {props.children}
      </div>
      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to={`${AppRoute.FILM}/${film.id}`}
          onClick={() => {
            onFilmCardTitleClick(film);
          }}
        >
          {film.title}
        </Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }),
  children: PropTypes.node.isRequired,
  onFilmCardTitleClick: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired
};

export {FilmCard};
export default withVideoPlayer(FilmCard);
