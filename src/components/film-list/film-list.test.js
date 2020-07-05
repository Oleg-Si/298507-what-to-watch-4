import React from 'react';
import renderer from 'react-test-renderer';
import FilmList from './film-list.jsx';
import {mockFilmsForTests} from '../../mock/films.js';

const onFilmCardTitleClick = () => {};

it(`Проверяет снепшот компонента FilmList`, () => {
  const tree = renderer.create(
      <FilmList
        films={mockFilmsForTests}
        filmsCount={3}
        onFilmCardTitleClick={onFilmCardTitleClick}
      />, {
        createNodeMock: () => {
          return {};
        }}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
