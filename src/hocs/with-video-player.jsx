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

      this._handlerVideoPlay = this._handlerVideoPlay.bind(this);
      this._handlerVideoStop = this._handlerVideoStop.bind(this);
    }

    _handlerVideoPlay() {
      this.setState({isPlaying: true});
    }

    _handlerVideoStop() {
      this.setState({isPlaying: false});
    }

    render() {
      return (
        <Component
          onPlay={this._handlerVideoPlay}
          onStop={this._handlerVideoStop}
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
