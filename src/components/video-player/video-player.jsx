import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const IMG_SETTINGS = {
  width: 280,
  height: 175
};

const VIDEO_PLAY_TIMEOUT = 1000; // ms

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      initialPlay: true
    };

    this._videoRef = React.createRef();
    this._timer = null;
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
    const {film, isPlaying} = this.props;

    if (isPlaying) {
      this._timer = setTimeout(() => {
        video.play();
        this.setState({initialPlay: false});
      }, VIDEO_PLAY_TIMEOUT);
    } else {
      clearTimeout(this._timer);

      if (!this.state.initialPlay) {
        video.pause();
        video.currentTime = 0;
        video.src = film.src;
        this.setState({initialPlay: true});
      }
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
      <video width={IMG_SETTINGS.width} height={IMG_SETTINGS.height} ref={this._videoRef}></video>
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
