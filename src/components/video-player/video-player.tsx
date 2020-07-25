import * as React from 'react';

interface Props {
  controls: boolean;
  isMuted: boolean;
  isPlaying: boolean;
  isPause?: boolean;
  isReady?: boolean;
  fullScreen?: boolean;
  onFullScreenChange?: () => void;
  onChangeProgress?: (currentTime: number, duration: number) => {};
  onPause?: () => void;
  onPlay: () => void;
  onReady: () => void;
  className?: string;
  src: string;
  poster: string;
  width?: number;
  height?: number;
}

class VideoPlayer extends React.PureComponent<Props> {
  private _videoRef: React.RefObject<HTMLVideoElement>;

  constructor(props: Props) {
    super(props);

    this._videoRef = React.createRef();
  }

  componentDidMount() {
    const video = this._videoRef.current;
    const {
      controls,
      isMuted,
      isReady,
      onChangeProgress,
      onPause,
      onPlay,
      onReady
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

    video.oncanplay = () => {
      if (!isReady) {
        onReady();
      }
    };

    video.addEventListener(`webkitfullscreenchange`, () => {
      this._changeFullscreen(video);
    });

    video.addEventListener(`mozfullscreenchange`, () => {
      this._changeFullscreen(video);
    });

    video.addEventListener(`fullscreenchange`, () => {
      this._changeFullscreen(video);
    });
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    const {
      isPlaying,
      isPause,
      fullScreen,
      controls
    } = this.props;

    if (isPlaying) {
      video.play();
    } else {
      if (isPause) {
        video.pause();
      } else {
        video.load();
      }
    }

    video.controls = controls;

    if (fullScreen && !document.fullscreenElement) {
      this._launchFullScreen(video);
      video.classList.add(`fullscreen`);
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.controls = null;
    video.muted = null;
    video.ontimeupdate = null;
    video.onpause = null;
    video.onplay = null;
    video.oncanplay = null;
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

    if (video.classList.contains(`fullscreen`) && !document.fullscreenElement) {
      video.classList.remove(`fullscreen`);
      onFullScreenChange();
    }
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

export default VideoPlayer;
