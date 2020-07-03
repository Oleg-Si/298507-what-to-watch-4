import React from 'react';
import renderer from 'react-test-renderer';
import GenreFilter from './genre-filter.jsx';

const genre = new Set(
    `Dramas`,
    `Horror`,
    `Comedies`,
    `Romance`,
    `Crime`,
    `Sci-Fi`,
    `Documentary`,
    `Thrillers`,
    `Kids & Family`
);

it(`Проверяет снепшот компонента GenreFilter`, () => {
  const tree = renderer.create(
      <GenreFilter
        genre={genre}
        activeGenre={`All genres`}
        onGenreCilck={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
