import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './main.jsx';
import {mockFilmsForTests} from '../../mock/films.js';
import {AuthorizationStatus} from './../../constants';
import {Router} from 'react-router-dom';
import history from './../../history';

const promoFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  bgImg: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  releaseDate: 2014
};

it(`Проверяет снепшот компонента Main`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <Main
          promoFilm={promoFilm}
          films={mockFilmsForTests}
          activeGenre={`All genres`}
          filteredFilms={mockFilmsForTests}
          filmsCount={3}
          onFilmCardTitleClick={() => {}}
          onGenreCilck={() => {}}
          onShowMoreClick={() => {}}
          authorizationStatus={AuthorizationStatus.AUTH}
          userAvatar={`img/avatar.jpg`}
        />
      </Router>, {
        createNodeMock: () => {
          return {};
        }}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
