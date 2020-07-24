import * as React from 'react';
import {Subtract} from 'utility-types';

interface State {
  isPlaying: boolean;
  isPause: boolean;
  isReady: boolean;
  controls: boolean;
  progress: number;
  allTime: number;
  fullScreen: boolean;
  isMuted: boolean;
}

interface InjectingProps {
  onPlay: (timeout?: boolean) => void;
  onPause: () => void;
  onStop: () => void;
  onChangeProgress: (currentTime: number, allTime: number) => void;
  onFullScreenClick: () => void;
  onReady: () => void;
  progress: number;
  allTime: number;
  fullScreen: boolean;
  isMuted: boolean;
  controls: boolean;
  isPlaying: boolean;
  isPause: boolean;
  isReady: boolean;
}

const VIDEO_PLAY_TIMEOUT = 1000; // ms

const withPlayer = (Component) => {

  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithPlayer extends React.PureComponent<T, State> {
    private _timer: ReturnType<typeof setTimeout>;
    constructor(props: T) {
      super(props);

      this.state = {
        isPlaying: false,
        isPause: false,
        isReady: false,
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
      this._handleReady = this._handleReady.bind(this);
    }

    componentWillUnmount() {
      clearTimeout(this._timer);
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

    _handleReady() {
      this.setState({isReady: true});
    }

    render() {
      return (
        <Component
          onPlay={this._handleVideoPlay}
          onPause={this._handleVideoPause}
          onStop={this._handleVideoStop}
          onChangeProgress={this._handleChangeProgress}
          onFullScreenClick={this._handleFullScreenChange}
          onReady={this._handleReady}

          progress={this.state.progress}
          allTime={this.state.allTime}
          fullScreen={this.state.fullScreen}

          isMuted={this.state.isMuted}
          controls={this.state.controls}
          isPlaying={this.state.isPlaying}
          isPause={this.state.isPause}
          isReady={this.state.isReady}
          {...this.props}
        />
      );
    }
  }

  return WithPlayer;
};

export default withPlayer;
