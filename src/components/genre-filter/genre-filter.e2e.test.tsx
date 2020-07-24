import * as React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GenreFilter} from './genre-filter';

Enzyme.configure({
  adapter: new Adapter()
});

const genre: string[] = [
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

it(`Клик по жанру вызывает коллбэк и передает корректное значение`, () => {
  const onGenreCilck = jest.fn();

  const genreFilter = shallow(
      <GenreFilter
        genre={genre}
        activeTab={`All genres`}
        onTabClick={onGenreCilck}
      />
  );

  const filters = genreFilter.find(`a.catalog__genres-link`);

  filters.at(1).simulate(`click`, {preventDefault() {}});

  expect(onGenreCilck).toHaveBeenCalledTimes(1);
});
