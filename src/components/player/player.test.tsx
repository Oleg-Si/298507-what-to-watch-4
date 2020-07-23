import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Player} from './player.js';
import {mockFilmForTests} from '../../mock/films.js';

it(`Проверяет снепшот компонента Player`, () => {
  const tree = renderer.create(
      <Player
        film={mockFilmForTests}
        controls={false}
        isMuted={true}
        isPlaying={false}
        onExitClick={() => null}
        onReady={() => null}
        onPlay={() => null}
        onPause={() => null}
        onStop={() => null}
        onFilmCardTitleClick={() => null}
        onFullScreenChange={() => null}
        onFullScreenClick={() => null}
        onChangeProgress={() => null}
        isReady={true}
        isPause={true}
        progress={10}
        allTime={50}
        fullScreen={false}
      />, {
        createNodeMock: () => {
          return {
            addEventListener: () => {}
          };
        }}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});