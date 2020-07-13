import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {mockFilmsForTests} from '../../mock/films.js';
import {Screens} from '../../constants.js';

const mockStore = configureStore([]);

const promoFilmMock = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`
};

it(`Проверяет снепшот компонента App`, () => {
  const store = mockStore({
    films: mockFilmsForTests,
    countFilmsForRender: 3,
    filteredFilmsByGenre: mockFilmsForTests,
    activeGenre: `All genres`
  });

  const tree = renderer.create(
      <Provider store={store}>
        <App
          promoFilmMock={promoFilmMock}
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
