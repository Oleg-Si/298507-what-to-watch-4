import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withVideoPlayer from './with-video-player.jsx';
import {mockFilmForTests} from '../../mock/films';

Enzyme.configure({
  adapter: new Adapter()
});

const children = <div className="children-component"></div>;

const Component = () => {
  return (
    <div>
      {children}
    </div>
  );
};

const WrappedComponent = withVideoPlayer(Component);

it(`Проверяет состояния Воспроизведение и Пауза`, () => {
  jest.useFakeTimers();

  const element = mount(
      <WrappedComponent
        film={mockFilmForTests}
        controls={false}
        isMuted={true}
        isPlaying={false}
      />
  );

  const play = jest.spyOn(window.HTMLMediaElement.prototype, `play`).mockImplementation(() => {});
  const load = jest.spyOn(window.HTMLMediaElement.prototype, `load`).mockImplementation(() => {});

  element.setState({isPlaying: true});
  element.instance()._handleVideoStop();
  expect(element.state(`isPlaying`)).toBe(false);
  element.instance()._handleVideoPlay();
  setTimeout(() => expect(element.state(`isPlaying`)).toBe(true), 1000);
  jest.runAllTimers();

  play.mockRestore();
  load.mockRestore();
});
