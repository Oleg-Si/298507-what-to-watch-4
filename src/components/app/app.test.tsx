import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {App} from './app';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {mockFilmsForTests} from '../../mock/films';
import NameSpace from '../../redux/name-space';
import {AuthorizationStatus, APIErrorsCode} from '../../constants';

const mockStore = configureStore([]);

it(`Проверяет снепшот компонента App`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: mockFilmsForTests,
      filteredFilmsByGenre: mockFilmsForTests,
      promoFilm: {
        title: `The Grand Budapest Hotel`,
        genre: `Drama`,
        bgImg: `img/bg-the-grand-budapest-hotel.jpg`,
        poster: `img/the-grand-budapest-hotel-poster.jpg`,
        releaseDate: 2014
      }
    },
    [NameSpace.APP]: {
      activeGenre: `All genres`,
      countFilmsForRender: 3,
      promoFilmIsFavorite: true
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
      userAvatar: `img/avatar.jpg`,
      authorizationStatusCode: null
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          authorizationStatusCode={APIErrorsCode.BAD_REQUEST}
          authorizationStatus={AuthorizationStatus.AUTH}
          isLoadedFilms={true}
          isLoadedPromoFilm={true}
          isLoadedFavoriteFilms={true}
          onSignIn={() => null}
        />
      </Provider>, {
        createNodeMock: () => {
          return {
            addEventListener: () => null
          };
        }}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
