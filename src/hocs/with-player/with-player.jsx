import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const VIDEO_PLAY_TIMEOUT = 1000; // ms

const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        isPause: false,
        controls: false,
        progress: 0,
        allTime: 0,
        fullScreen: false,
        isMuted: this.props.isMuted,
      };

      this._timer = null;
      this._handleVideoPlay = this._handleVideoPlay.bind(this);
      this._handleVideoStop = this._handleVideoStop.bind(this);
      this._handleVideoPause = this._handleVideoPause.bind(this);
      this._handleChangeProgress = this._handleChangeProgress.bind(this);
      this._handleFullScreenChange = this._handleFullScreenChange.bind(this);
    }

    _handleVideoPlay(timeout = false) {
      if (timeout) {
        this._timer = setTimeout(() => {
          this.setState({
            isPlaying: true,
            isPause: false
          });
        }, VIDEO_PLAY_TIMEOUT);
      } else {
        this.setState({
          isPlaying: true,
          isPause: false
        });
      }
    }

    _handleVideoStop() {
      clearTimeout(this._timer);
      this.setState({isPlaying: false});
    }

    _handleVideoPause() {
      this.setState({
        isPlaying: false,
        isPause: true
      });
    }

    _handleChangeProgress(currentTime, allTime) {
      if (this.state.allTime === 0 || isNaN(this.state.allTime)) {
        this.setState({allTime: Math.round(allTime)});
      }
      this.setState({progress: Math.round(currentTime)});
    }

    _handleFullScreenChange() {
      this.setState((prevState) => ({fullScreen: !prevState.fullScreen}));
    }

    componentWillUnmount() {
      clearTimeout(this._timer);
    }

    render() {
      return (
        <Component
          onPlay={this._handleVideoPlay}
          onPause={this._handleVideoPause}
          onStop={this._handleVideoStop}
          onChangeProgress={this._handleChangeProgress}
          onFullScreenClick={this._handleFullScreenChange}

          progress={this.state.progress}
          allTime={this.state.allTime}
          fullScreen={this.state.fullScreen}

          isMuted={this.state.isMuted}
          controls={this.state.controls}
          isPlaying={this.state.isPlaying}
          isPause={this.state.isPause}
          {...this.props}
        />
      );
    }
  }

  WithPlayer.propTypes = {
    isMuted: PropTypes.bool.isRequired
  };

  return WithPlayer;
};

export default withPlayer;
