import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShowMore from './show-more.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Клик на кнопку вызывает коллбэк`, () => {
  const onShowMoreClick = jest.fn();

  const showMore = shallow(
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
