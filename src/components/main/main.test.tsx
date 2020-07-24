import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Main} from './main';
import {mockFilmForTests, mockFilmsForTests} from '../../mock/films';
import {AuthorizationStatus} from '../../constants';
import {Router} from 'react-router-dom';
import history from '../../history';

it(`Проверяет снепшот компонента Main`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <Main
          promoFilm={mockFilmForTests}
          films={mockFilmsForTests}
          activeGenre={`All genres`}
          filteredFilms={mockFilmsForTests}
          filmsCount={3}
          onFilmCardTitleClick={() => null}
          onGenreCilck={() => null}
          onShowMoreClick={() => null}
          onFavorite={() => null}
          onMyListClick={() => null}
          onPlayClick={() => null}
          promoFilmStatus={true}
          authorizationStatus={AuthorizationStatus.AUTH}
          userAvatar={`img/avatar.jpg`}
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
