import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './film-card.jsx';

const film = {
  id: 0,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

const onFilmCardTitleClick = () => {};
const onFilmCardMouseEnter = () => {};

it(`FilmCard should render film card`, () => {
  const tree = renderer.create(
      <FilmCard
        film={film}
        onFilmCardTitleClick={onFilmCardTitleClick}
        onFilmCardMouseEnter={onFilmCardMouseEnter}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
