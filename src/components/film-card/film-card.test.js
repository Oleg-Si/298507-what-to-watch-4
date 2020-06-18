import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './film-card.jsx';

const title = `Macbeth`;

const onFilmCardTitleClick = () => {};

it(`FilmCard should render film card`, () => {
  const tree = renderer.create(
      <FilmCard
        title={title}
        onFilmCardTitleClick={onFilmCardTitleClick}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
