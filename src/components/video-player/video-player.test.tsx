import * as React from 'react';
import * as renderer from 'react-test-renderer';
import VideoPlayer from './video-player.js';
import {mockFilmForTests} from '../../mock/films.js';

it(`Проверяет снепшот компонента VideoPlayer`, () => {
  const tree = renderer.create(
      <VideoPlayer
        src={mockFilmForTests.src}
        poster={mockFilmForTests.poster}
        isReady={false}
        onPlay={() => null}
        onReady={() => null}
        controls={false}
        isMuted={true}
        isPlaying={false}
      />, {
        createNodeMock: () => {
          return {
            addEventListener: () => {}
          };
        }}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});