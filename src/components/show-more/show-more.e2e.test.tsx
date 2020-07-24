import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import ShowMore from './show-more';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Клик на кнопку вызывает коллбэк`, () => {
  const onShowMoreClick = jest.fn();

  const showMore = Enzyme.shallow(
      <ShowMore
        allFilmsCount={8}
        filmsCount={5}
        onShowMoreClick={onShowMoreClick}
      />
  );

  const button = showMore.find(`button.catalog__button`);

  button.simulate(`click`);

  expect(onShowMoreClick).toHaveBeenCalledTimes(1);
});
