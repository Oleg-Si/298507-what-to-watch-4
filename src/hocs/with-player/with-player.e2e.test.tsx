import * as React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withPlayer from './with-player.js';

Enzyme.configure({
  adapter: new Adapter()
});

const Component = () => {
  return (
    <div>
      <p>Component</p>
    </div>
  );
};

const WrappedComponent = withPlayer(Component);

it(`Проверяет состояния хок withPlayer`, () => {
  jest.useFakeTimers();

  const element = mount(
      <WrappedComponent
        isMuted={true}
      />
  );

  const play = jest.spyOn(window.HTMLMediaElement.prototype, `play`).mockImplementation(() => null);
  const load = jest.spyOn(window.HTMLMediaElement.prototype, `load`).mockImplementation(() => null);
  const pause = jest.spyOn(window.HTMLMediaElement.prototype, `pause`).mockImplementation(() => null);

  element.setState({
    isPlaying: true,
    isPause: false
  });
  element.instance()._handleVideoStop();
  expect(element.state(`isPlaying`)).toBe(false);
  expect(element.state(`isPause`)).toBe(false);

  element.instance()._handleVideoPlay();
  expect(element.state(`isPlaying`)).toBe(true);
  expect(element.state(`isPause`)).toBe(false);

  element.instance()._handleVideoPause();
  expect(element.state(`isPlaying`)).toBe(false);
  expect(element.state(`isPause`)).toBe(true);

  element.instance()._handleVideoPlay(true);
  setTimeout(() => expect(element.state(`isPlaying`)).toBe(true), 1000);
  setTimeout(() => expect(element.state(`isPause`)).toBe(false), 1000);
  jest.runAllTimers();

  play.mockRestore();
  load.mockRestore();
  pause.mockRestore();

  element.setState({fullScreen: false});
  element.instance()._handleFullScreenChange();
  expect(element.state(`fullScreen`)).toBe(true);
  element.instance()._handleFullScreenChange();
  expect(element.state(`fullScreen`)).toBe(false);

  element.setState({isReady: false});
  element.instance()._handleReady();
  expect(element.state(`isReady`)).toBe(true);

  element.setState({
    progress: 0,
    allTime: 0
  });

  element.instance()._handleChangeProgress(20.4, 50.4);
  expect(element.state(`allTime`)).toBe(50);
  expect(element.state(`progress`)).toBe(20);

  element.setState({
    progress: 0,
    allTime: 10
  });

  element.instance()._handleChangeProgress(20.3, 51);
  expect(element.state(`allTime`)).toBe(10);
  expect(element.state(`progress`)).toBe(20);

  element.instance().componentWillUnmount();
});
