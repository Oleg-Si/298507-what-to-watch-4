import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';
import {mockFilmForTests} from '../../mock/films.js';

it(`Проверяет снепшот компонента VideoPlayer`, () => {
  const tree = renderer.create(
      <VideoPlayer
        film={mockFilmForTests}
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
