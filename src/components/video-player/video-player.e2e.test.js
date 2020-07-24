import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player.jsx';
import {mockFilmForTests} from '../../mock/films.js';

Enzyme.configure({
  adapter: new Adapter()
});

const mockedElementDOM = {
  classList: {
    contains: () => {
      return `fullscreen`;
    },
    remove: () => {}
  }
};

it(`Проверяет компонент videoPlayer`, () => {
  const onChangeProgress = jest.fn();
  const onFullScreenChange = jest.fn();
  const onPlay = jest.fn();
  const onPause = jest.fn();
  const requestFullScreen = jest.fn();
  const video1 = {requestFullScreen};
  const video2 = {mozRequestFullScreen: requestFullScreen};
  const video3 = {webkitRequestFullScreen: requestFullScreen};

  const videoPlayer = mount(
      <VideoPlayer
        src={mockFilmForTests.src}
        poster={mockFilmForTests.poster}
        controls={false}
        isMuted={true}
        isPlaying={false}
        isPause={true}
        onChangeProgress={onChangeProgress}
        onFullScreenChange={onFullScreenChange}
        onPlay={onPlay}
        onPause={onPause}
      />
  );

  videoPlayer.instance()._launchFullScreen(video1);
  videoPlayer.instance()._launchFullScreen(video2);
  videoPlayer.instance()._launchFullScreen(video3);
  expect(requestFullScreen).toHaveBeenCalledTimes(3);

  videoPlayer.instance()._changeFullscreen(mockedElementDOM);
  expect(onFullScreenChange).toHaveBeenCalledTimes(1);
});

it(`Проверяет компонент videoPlayer 2`, () => {
  const videoPlayer = mount(
      <VideoPlayer
        src={mockFilmForTests.src}
        poster={mockFilmForTests.poster}
        controls={false}
        isMuted={true}
        isPlaying={true}
        isPause={true}
      />
  );

  const play = jest.spyOn(window.HTMLMediaElement.prototype, `play`).mockImplementation(() => {});

  videoPlayer.instance().componentDidUpdate();
  expect(play).toHaveBeenCalledTimes(1);
  play.mockRestore();
});

it(`Проверяет компонент videoPlayer 2`, () => {
  const videoPlayer = mount(
      <VideoPlayer
        src={mockFilmForTests.src}
        poster={mockFilmForTests.poster}
        controls={false}
        isMuted={true}
        isPlaying={false}
        isPause={true}
      />
  );

  const pause = jest.spyOn(window.HTMLMediaElement.prototype, `pause`).mockImplementation(() => {});

  videoPlayer.instance().componentDidUpdate();
  expect(pause).toHaveBeenCalledTimes(1);
  pause.mockRestore();
});

it(`Проверяет компонент videoPlayer 2`, () => {
  const videoPlayer = mount(
      <VideoPlayer
        src={mockFilmForTests.src}
        poster={mockFilmForTests.poster}
        controls={false}
        isMuted={true}
        isPlaying={false}
        isPause={false}
      />
  );

  const load = jest.spyOn(window.HTMLMediaElement.prototype, `load`).mockImplementation(() => {});

  videoPlayer.instance().componentDidUpdate();
  expect(load).toHaveBeenCalledTimes(1);
  load.mockRestore();
});
