import * as React from 'react';
import * as renderer from 'react-test-renderer';
import GenreFilter from './genre-filter';

const genres: string[] = [
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
        genres={genres}
        activeTab={`All genres`}
        onTabClick={() => null}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
