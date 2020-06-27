import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {defaultFilmCard as FilmCard} from './film-card.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const film = {
  id: 0,
  title: `Revenant`,
  img: `img/revenant.jpg`,
  genre: `Drama`,
  rating: `8.5`,
  src: `https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4`,
  releaseDate: 1552915226386,
  ratingCount: 148,
  description: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&aposs friend and protege.`, `Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&aposs lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],
  director: `Bill Murray`,
  starring: [`Edward Norton`, `Jude Law`, `Willem Dafoe and other`, `Wes Andreson`]
};

const children = <div className="children-component"></div>;

const mockEvent = {
  preventDefault() {}
};

it(`Клик на заголовок вызывает коллбэк`, () => {
  const onFilmCardTitleClick = jest.fn();
  const onFilmCardMouseEnter = jest.fn();

  const filmCard = shallow(
      <FilmCard
        film={film}
        onFilmCardTitleClick={onFilmCardTitleClick}
        onFilmCardMouseEnter={onFilmCardMouseEnter}
        onPlay={() => {}}
        onStop={() => {}}
      >{children}</FilmCard>
  );

  const title = filmCard.find(`a.small-movie-card__link`);

  title.simulate(`click`, mockEvent);

  // Обработчик был вызван 1 раз
  expect(onFilmCardTitleClick).toHaveBeenCalledTimes(1);
  expect(onFilmCardTitleClick.mock.calls[0][0]).toMatchObject(film);
});

it(`При наведении на карточку фильма в обработчик попадает информация о фильме`, () => {
  const onFilmCardTitleClick = jest.fn();
  const onFilmCardMouseEnter = jest.fn();

  const filmCard = shallow(
      <FilmCard
        film={film}
        onFilmCardTitleClick={onFilmCardTitleClick}
        onFilmCardMouseEnter={onFilmCardMouseEnter}
        onPlay={() => {}}
        onStop={() => {}}
      >{children}</FilmCard>
  );

  filmCard.simulate(`mouseenter`);

  // Обработчик был вызван 1 раз
  expect(onFilmCardMouseEnter).toHaveBeenCalledTimes(1);

  // В обработчик попадает информация о фильме
  expect(onFilmCardMouseEnter.mock.calls[0][0]).toMatchObject(film);
});
