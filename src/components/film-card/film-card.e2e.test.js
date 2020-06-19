import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from './film-card.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const film = {
  id: 0,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

it(`Клик на заголовок вызывает коллбэк`, () => {
  const onFilmCardTitleClick = jest.fn();

  const filmCard = shallow(
      <FilmCard
        film={film}
        onFilmCardTitleClick={onFilmCardTitleClick}
      />
  );

  const title = filmCard.find(`a.small-movie-card__link`);

  title.simulate(`click`);

  // Обработчик был вызван 1 раз
  expect(onFilmCardTitleClick).toHaveBeenCalledTimes(1);
});

it(`При наведении на карточку фильма в обработчик попадает информация о фильме`, () => {
  const onFilmCardMouseEnter = jest.fn();

  const filmCard = shallow(
      <FilmCard
        film={film}
        onFilmCardMouseEnter={onFilmCardMouseEnter}
      />
  );

  filmCard.simulate(`mouseenter`);

  // Обработчик был вызван 1 раз
  expect(onFilmCardMouseEnter).toHaveBeenCalledTimes(1);

  // В обработчик попадает информация о фильме
  expect(onFilmCardMouseEnter.mock.calls[0][0]).toMatchObject(film);
});
