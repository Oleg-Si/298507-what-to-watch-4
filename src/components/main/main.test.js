import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main.jsx';
import {mockFilmsForTests} from '../../mock/films.js';

const promoFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014
};

it(`Проверяет снепшот компонента Main`, () => {
  const tree = renderer.create(
      <Main
        promoFilm={promoFilm}
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
