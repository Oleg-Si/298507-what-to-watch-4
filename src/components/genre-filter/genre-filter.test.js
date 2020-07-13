import React from 'react';
import renderer from 'react-test-renderer';
import GenreFilter from './genre-filter.jsx';

const genre = [
  `All genres`,
  `Dramas`,
  `Horror`,
  `Comedies`,
  `Romance`,
  `Crime`,
  `Sci-Fi`,
  `Documentary`,
  `Thrillers`,
  `Kids & Family`
];

it(`Проверяет снепшот компонента GenreFilter`, () => {
  const tree = renderer.create(
      <GenreFilter
        genre={genre}
        activeTab={`All genres`}
        onTabClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
