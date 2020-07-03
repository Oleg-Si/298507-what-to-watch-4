import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreFilter from './genre-filter.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

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

it(`Клик по жанру вызывает коллбэк и передает корректное значение`, () => {
  const onGenreCilck = jest.fn();

  const genreFilter = shallow(
      <GenreFilter
        genre={genre}
        activeGenre={`All genres`}
        onGenreCilck={onGenreCilck}
      />
  );

  const filters = genreFilter.find(`a.catalog__genres-link`);

  filters.at(1).simulate(`click`, {preventDefault() {}});
  filters.at(0).simulate(`click`, {preventDefault() {}});

  expect(onGenreCilck).toHaveBeenCalledTimes(2);

  expect(onGenreCilck.mock.calls[0][0]).toBe(`Dramas`);
  expect(onGenreCilck.mock.calls[1][0]).toBe(`All genres`);

});
