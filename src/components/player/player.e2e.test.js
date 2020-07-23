import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Player} from './player';
import {mockFilmForTests} from '../../mock/films';
import history from './../../history';
import {Router} from 'react-router-dom';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Клик по кнопкам выхода и полноэкранного режима вызывает коллбек`, () => {
  const mockGoBack = jest.fn();
  history.goBack = mockGoBack;
  const onExitClick = jest.fn(() => {
    history.goBack();
  });

  const onFullScreenClick = jest.fn();

  const player = mount(
      <Router
        history={history}
      >
        <Player
          film={mockFilmForTests}
          controls={false}
          isMuted={true}
          isPlaying={false}
          onExitClick={onExitClick}
          onFullScreenClick={onFullScreenClick}
        />
      </Router>
  );

  player.find(`button.player__exit`).simulate(`click`);
  player.find(`button.player__full-screen`).simulate(`click`);

  expect(onExitClick).toHaveBeenCalledTimes(1);
  expect(mockGoBack).toHaveBeenCalledTimes(1);
  expect(onFullScreenClick).toHaveBeenCalledTimes(1);
});

it(`Клик по кнопкe play вызывает коллбек`, () => {
  const onPlay = jest.fn();
  const onPause = jest.fn();

  const player = shallow(
      <Player
        film={mockFilmForTests}
        controls={false}
        isMuted={true}
        isPlaying={false}
        onExitClick={() => {}}
        onFullScreenClick={() => {}}
        onPlay={onPlay}
        onPause={onPause}
      />
  );

  player.find(`button.player__play`).simulate(`click`, {preventDefault() {}});

  expect(onPlay).toHaveBeenCalledTimes(1);
  expect(onPause).toHaveBeenCalledTimes(0);
});

it(`Клик по кнопкe pause вызывает коллбек`, () => {
  const onPlay = jest.fn();
  const onPause = jest.fn();

  const player = shallow(
      <Player
        film={mockFilmForTests}
        controls={false}
        isMuted={true}
        isPlaying={true}
        onExitClick={() => {}}
        onFullScreenClick={() => {}}
        onPlay={onPlay}
        onPause={onPause}
      />
  );

  player.find(`button.player__play`).simulate(`click`, {preventDefault() {}});

  expect(onPlay).toHaveBeenCalledTimes(0);
  expect(onPause).toHaveBeenCalledTimes(1);
});

describe(`convertTimeToBar возвращает корректное значение`, () => {
  it(`значение 0`, () => {
    const player = shallow(
        <Player
          film={mockFilmForTests}
          controls={false}
          isMuted={true}
          isPlaying={true}
          onExitClick={() => {}}
          onFullScreenClick={() => {}}
          allTime={0}
        />
    );

    const progressProps = player.find(`.player__progress`).props();
    expect(progressProps).toHaveProperty(`value`, 0);
  });

  it(`значение 0`, () => {
    const player = shallow(
        <Player
          film={mockFilmForTests}
          controls={false}
          isMuted={true}
          isPlaying={true}
          onExitClick={() => {}}
          onFullScreenClick={() => {}}
          allTime={NaN}
        />
    );

    const progressProps = player.find(`.player__progress`).props();
    expect(progressProps).toHaveProperty(`value`, 0);
  });

  it(`значение 40`, () => {
    const player = shallow(
        <Player
          film={mockFilmForTests}
          controls={false}
          isMuted={true}
          isPlaying={true}
          onExitClick={() => {}}
          onFullScreenClick={() => {}}
          allTime={50}
          progress={20}
        />
    );

    const progressProps = player.find(`.player__progress`).props();
    expect(progressProps).toHaveProperty(`value`, 40);
  });
});
