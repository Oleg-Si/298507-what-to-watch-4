import React from 'react';
import renderer from 'react-test-renderer';
import {defaultFilmCard as FilmCard} from './film-card.jsx';

const film = {
  id: 0,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

const children = <div className="children-component"></div>;

it(`Проверяет снепшот компонента FilmCard`, () => {
  const tree = renderer.create(
      <FilmCard
        film={film}
        onFilmCardTitleClick={() => {}}
        onPlay={() => {}}
        onStop={() => {}}
      >{children}</FilmCard>, {
        createNodeMock: () => {
          return {};
        }}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
