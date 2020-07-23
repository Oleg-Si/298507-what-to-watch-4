import React from 'react';
import renderer from 'react-test-renderer';
import {Player} from './player.jsx';
import {mockFilmForTests} from '../../mock/films.js';

it(`Проверяет снепшот компонента Player`, () => {
  const tree = renderer.create(
      <Player
        film={mockFilmForTests}
        controls={false}
        isMuted={true}
        isPlaying={false}
        onExitClick={() => {}}
      />, {
        createNodeMock: () => {
          return {
            addEventListener: () => {}
          };
        }}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
