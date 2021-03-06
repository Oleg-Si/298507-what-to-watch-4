import * as React from 'react';
import * as renderer from 'react-test-renderer';
import FilmList from './film-list';
import {mockFilmsForTests} from '../../mock/films';
import {Router} from 'react-router-dom';
import history from '../../history';

const onFilmCardTitleClick = () => null;

it(`Проверяет снепшот компонента FilmList`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <FilmList
          films={mockFilmsForTests}
          filmsCount={3}
          onFilmCardTitleClick={onFilmCardTitleClick}
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
