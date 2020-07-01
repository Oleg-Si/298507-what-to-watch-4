import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withVideoPlayer from './with-video-player.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const film = {
  id: 0,
  title: `Revenant`,
  img: `img/revenant.jpg`,
  genre: `Drama`,
  rating: `8.5`,
  src: `https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4`,
  releaseDate: 1552915226386,
  ratingCount: 148,
  description: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&aposs friend and protege.`, `Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&aposs lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],
  director: `Bill Murray`,
  starring: [`Edward Norton`, `Jude Law`, `Willem Dafoe and other`, `Wes Andreson`]
};

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
        film={film}
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
