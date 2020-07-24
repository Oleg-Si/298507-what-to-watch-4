import * as React from 'react';
import * as renderer from 'react-test-renderer';
import VideoPlayer from './video-player';
import {mockFilmForTests} from '../../mock/films';

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
            addEventListener: () => null
          };
        }}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
