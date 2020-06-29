import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  src: `src1`
};

it(`Проверяет снепшот компонента VideoPlayer`, () => {
  const tree = renderer.create(
      <VideoPlayer
        film={film}
        controls={false}
        isMuted={true}
        isPlaying={false}
      />, {
        createNodeMock: () => {
          return {};
        }}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
