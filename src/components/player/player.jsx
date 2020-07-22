import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentFilm} from '../../redux/data/selectors';
import withPlayer from './../../hocs/with-player/with-player.jsx';
import VideoPlayer from '../video-player/video-player.jsx';
import moment from 'moment';
import history from './../../history';

class Player extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
  }

  render() {
    const {
      film,
      onPause,
      onPlay,
      isPlaying,
      isMuted,
      isPause,
      controls,
      onChangeProgress,
      progress,
      allTime,
      fullScreen,
      onFullScreenClick,
      onReady,
      onExitClick
    } = this.props;

    const convertTimeToBar = () => {
      if (isNaN(allTime) || allTime === 0) {
        return 0;
      } else {
        return progress * 100 / allTime;
      }
    };

    const getDuration = () => moment.utc(allTime * 1000).format(`H:mm:ss`);

    return (
      <div className="player">
        <VideoPlayer
          src={film.src}
          poster={film.img}
          className={`player__video`}
          isPlaying={isPlaying}
          isPause={isPause}
          isMuted={isMuted}
          controls={controls}
          onChangeProgress={onChangeProgress}
          fullScreen={fullScreen}
          onFullScreenChange={onFullScreenClick}
          onPlay={onPlay}
          onPause={onPause}
          onReady={onReady}
        />

        <button type="button" className="player__exit" onClick={onExitClick}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={convertTimeToBar()} max="100"></progress>
              <div className="player__toggler" style={{left: `${convertTimeToBar()}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{allTime ? getDuration() : `0:00:00`}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play" onClick={(evt) => {
              evt.preventDefault();

              if (isPlaying) {
                onPause();
              } else {
                onPlay();
              }
            }}>
              {isPlaying
                ? <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                : <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                  <symbol id="play-s" viewBox="0 0 19 19">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5" />
                  </symbol>
                </svg>
              }
              <span>Play</span>
            </button>
            <div className="player__name">{film.title}</div>

            <button type="button" className="player__full-screen" onClick={onFullScreenClick}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  film: PropTypes.shape({
    src: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }),
  controls: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isPause: PropTypes.bool,
  fullScreen: PropTypes.bool,
  onFullScreenChange: PropTypes.func,
  onChangeProgress: PropTypes.func,
  onPause: PropTypes.func,
  onPlay: PropTypes.func,
  onReady: PropTypes.func,
  onFullScreenClick: PropTypes.func,
  onExitClick: PropTypes.func.isRequired,
  progress: PropTypes.number,
  allTime: PropTypes.number,
};

const mapStateToProps = (state, props) => ({
  film: getCurrentFilm(state, props.filmId)
});

const mapDispatchToProps = () => ({
  onExitClick() {
    history.goBack();
  }
});

export {Player};
export default connect(mapStateToProps, mapDispatchToProps)(withPlayer(Player));
