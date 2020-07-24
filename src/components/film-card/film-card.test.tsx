import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {FilmCard} from './film-card.js';
import {mockFilmForTests} from '../../mock/films.js';
import {Router} from 'react-router-dom';
import history from '../../history';

it(`Проверяет снепшот компонента FilmCard`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <FilmCard
          film={mockFilmForTests}
          onFilmCardTitleClick={() => null}
          onPlay={() => null}
          onStop={() => null}
          onReady={() => null}
          controls={false}
          isMuted={true}
          isPlaying={false}
          isReady={true}
        />
      </Router>, {
        createNodeMock: () => {
          return {
            addEventListener: () => null
          };
        }}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
