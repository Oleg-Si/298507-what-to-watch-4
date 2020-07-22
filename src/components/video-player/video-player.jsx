import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
  }

  _launchFullScreen(element) {
    if (element.requestFullScreen) {
      element.requestFullScreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
  }

  _changeFullscreen(video) {
    const {onFullScreenChange} = this.props;

    if (video.classList.contains(`fullscreen`)) {
      video.classList.remove(`fullscreen`);
      onFullScreenChange();
    }
  }

  componentDidMount() {
    const video = this._videoRef.current;
    const {
      controls,
      isMuted,
      onChangeProgress,
      onPause,
      onPlay,
    } = this.props;

    video.controls = controls;
    video.muted = isMuted;

    video.ontimeupdate = () => {
      if (onChangeProgress) {
        onChangeProgress(video.currentTime, video.duration);
      }
    };

    video.onplay = () => {
      onPlay();
    };

    video.onpause = () => {
      onPause();
    };
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    const {isPlaying, isPause, fullScreen} = this.props;

    if (isPlaying) {
      video.play();
    } else {
      if (isPause) {
        video.pause();
      } else {
        video.load();
      }
    }

    video.addEventListener(`webkitfullscreenchange`, () => {
      this._changeFullscreen(video);
    });
    video.addEventListener(`mozfullscreenchange`, () => {
      this._changeFullscreen(video);
    });
    video.addEventListener(`fullscreenchange`, () => {
      this._changeFullscreen(video);
    });

    if (fullScreen) {
      this._launchFullScreen(video);
      video.classList.add(`fullscreen`);
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.controls = null;
    video.muted = null;
  }

  render() {
    const {
      className,
      width,
      height,
      src,
      poster
    } = this.props;

    return (
      <video
        src={src}
        poster={poster}
        ref={this._videoRef}
        className={className && className}
        width={width && width}
        height={height && height}
      ></video>
    );
  }
}

VideoPlayer.propTypes = {
  controls: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isPause: PropTypes.bool,
  fullScreen: PropTypes.bool,
  onFullScreenChange: PropTypes.func,
  onChangeProgress: PropTypes.func,
  onPause: PropTypes.func,
  onPlay: PropTypes.func,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default VideoPlayer;
