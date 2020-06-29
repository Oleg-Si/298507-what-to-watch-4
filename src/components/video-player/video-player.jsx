import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const VideoSettings = {
  WIDTH: 280,
  HEIGHT: 175,
  TIMEOUT: 1000 // ms
};

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
  }

  componentDidMount() {
    const video = this._videoRef.current;
    const {film, controls, isMuted} = this.props;

    video.poster = film.img;
    video.controls = controls;
    video.muted = isMuted;
    video.src = film.src;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    const {isPlaying} = this.props;

    if (isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.poster = ``;
    video.controls = null;
    video.muted = null;
    video.src = ``;
    clearTimeout(this._timer);
  }

  render() {
    return (
      <video width={VideoSettings.WIDTH} height={VideoSettings.HEIGHT} ref={this._videoRef}></video>
    );
  }
}

VideoPlayer.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }),
  controls: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default VideoPlayer;
