import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FilmCard} from './film-card.jsx';
import {mockFilmForTests} from '../../mock/films.js';


Enzyme.configure({
  adapter: new Adapter()
});

const children = <div className="children-component"></div>;

const mockEvent = {
  preventDefault() {}
};

it(`Клик на заголовок вызывает коллбэк`, () => {
  const onFilmCardTitleClick = jest.fn();

  const filmCard = shallow(
      <FilmCard
        film={mockFilmForTests}
        onFilmCardTitleClick={onFilmCardTitleClick}
        onPlay={() => {}}
        onStop={() => {}}
      >{children}</FilmCard>
  );

  const title = filmCard.find(`a.small-movie-card__link`);

  title.simulate(`click`, mockEvent);

  // Обработчик был вызван 1 раз
  expect(onFilmCardTitleClick).toHaveBeenCalledTimes(1);
  expect(onFilmCardTitleClick.mock.calls[0][0]).toMatchObject(mockFilmForTests);
});
