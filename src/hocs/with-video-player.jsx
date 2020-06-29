import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from './../components/video-player/video-player.jsx';

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        isMuted: true,
        controls: false
      };

      this._handleVideoPlay = this._handleVideoPlay.bind(this);
      this._handleVideoStop = this._handleVideoStop.bind(this);
    }

    _handleVideoPlay() {
      this.setState({isPlaying: true});
    }

    _handleVideoStop() {
      this.setState({isPlaying: false});
    }

    render() {
      return (
        <Component
          onPlay={this._handleVideoPlay}
          onStop={this._handleVideoStop}
          {...this.props}
        >
          <VideoPlayer
            isPlaying={this.state.isPlaying}
            film={this.props.film}
            isMuted={this.state.isMuted}
            controls={this.state.controls}
          />
        </Component>
      );
    }
  }

  WithVideoPlayer.propTypes = {
    film: PropTypes.shape({
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired
    })
  };

  return WithVideoPlayer;
};

export default withVideoPlayer;
