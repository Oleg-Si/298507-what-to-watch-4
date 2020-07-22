import React from 'react';
import PropTypes from 'prop-types';
import withPlayer from '../../hocs/with-player/with-player.jsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants.js';
import VideoPlayer from './../video-player/video-player.jsx';

const VideoSettings = {
  WIDTH: 280,
  HEIGHT: 175,
  TIMEOUT: 1000 // ms
};

const FilmCard = (props) => {
  const {
    film,
    onPlay,
    onStop,
    onFilmCardTitleClick,
    isPlaying,
    isMuted,
    controls,
  } = props;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => {
      onPlay(true);
    }} onMouseLeave={() => {
      onStop();
    }}>

      <div className="small-movie-card__image">

        <VideoPlayer
          src={film.previewVideoLink}
          poster={film.img}
          isPlaying={isPlaying}
          film={film}
          isMuted={isMuted}
          controls={controls}
          width={VideoSettings.WIDTH}
          height={VideoSettings.HEIGHT}
          onPlay={onPlay}
        />

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
    previewVideoLink: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }),
  onFilmCardTitleClick: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  controls: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export {FilmCard};
export default withPlayer(FilmCard);
