import * as React from 'react';
import withPlayer from '../../hocs/with-player/with-player';
import {Link} from 'react-router-dom';
import {AppRoute, preloaderCardStyle} from '../../constants';
import VideoPlayer from '../video-player/video-player';
import Preloader from '../preloader/preloader';
import {FilmInterface} from '../../types';

const VideoSettings = {
  WIDTH: 280,
  HEIGHT: 175,
  TIMEOUT: 1000 // ms
};

interface Props {
  film: FilmInterface,
  onFilmCardTitleClick: (film: FilmInterface) => void,
  onPlay: (setTimeout?: boolean) => void,
  onStop: () => void,
  onReady: () => void,
  controls: boolean,
  isMuted: boolean,
  isPlaying: boolean,
  isReady: boolean
}

const FilmCard: React.FC<Props> = (props: Props) => {
  const {
    film,
    onPlay,
    onStop,
    onReady,
    onFilmCardTitleClick,
    isPlaying,
    isMuted,
    isReady,
    controls,
  } = props;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => {
      onPlay(true);
    }} onMouseLeave={() => {
      onStop();
    }}>

      {!isReady && <Preloader style={preloaderCardStyle} />}

      <div className="small-movie-card__image">

        <VideoPlayer
          src={film.previewVideoLink}
          poster={film.img}
          isPlaying={isPlaying}
          isMuted={isMuted}
          isReady={isReady}
          controls={controls}
          width={VideoSettings.WIDTH}
          height={VideoSettings.HEIGHT}
          onPlay={onPlay}
          onReady={onReady}
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

export {FilmCard};
export default withPlayer(FilmCard);
