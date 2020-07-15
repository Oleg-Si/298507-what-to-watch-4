import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {mockFilmsForTests} from '../../mock/films.js';
import {Screens} from '../../constants.js';
import NameSpace from './../../redux/name-space';

const mockStore = configureStore([]);

it(`Проверяет снепшот компонента App`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: mockFilmsForTests,
      filteredFilmsByGenre: mockFilmsForTests,
      promoFilm: {
        title: `The Grand Budapest Hotel`,
        genre: `Drama`,
        releaseDate: 2014
      }
    },
    [NameSpace.APP]: {
      activeGenre: `All genres`,
      countFilmsForRender: 3
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          screen={Screens.MAIN}
          activeFilm={{}}
          onFilmCardTitleClick={() => {}}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
