import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FilmCard} from './film-card.jsx';
import {mockFilmForTests} from '../../mock/films.js';
import {Router} from 'react-router-dom';
import history from './../../history';


Enzyme.configure({
  adapter: new Adapter()
});

const children = <div className="children-component"></div>;

const mockEvent = {
  preventDefault() {}
};

it(`Клик на заголовок вызывает коллбэк`, () => {
  const onFilmCardTitleClick = jest.fn();

  const filmCard = mount(
      <Router
        history={history}
      >
        <FilmCard
          film={mockFilmForTests}
          onFilmCardTitleClick={onFilmCardTitleClick}
          onPlay={() => {}}
          onStop={() => {}}
        >{children}</FilmCard>
      </Router>
  );

  const title = filmCard.find(`a.small-movie-card__link`);

  title.at(0).simulate(`click`, mockEvent);

  // Обработчик был вызван 1 раз
  expect(onFilmCardTitleClick).toHaveBeenCalledTimes(1);
  expect(onFilmCardTitleClick.mock.calls[0][0]).toMatchObject(mockFilmForTests);
});
