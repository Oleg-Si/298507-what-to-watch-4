import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main.jsx';
import {mockFilmsForTests} from '../../mock/films.js';

const promoFilmMock = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`
};

it(`Проверяет снепшот компонента Main`, () => {
  const tree = renderer.create(
      <Main
        promoFilmMock={promoFilmMock}
        films={mockFilmsForTests}
        activeGenre={`All genres`}
        filteredFilms={mockFilmsForTests}
        filmsCount={3}
        onFilmCardTitleClick={() => {}}
        onGenreCilck={() => {}}
        onShowMoreClick={() => {}}
      />, {
        createNodeMock: () => {
          return {};
        }}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
