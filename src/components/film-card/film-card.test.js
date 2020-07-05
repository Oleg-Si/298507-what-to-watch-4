import React from 'react';
import renderer from 'react-test-renderer';
import {FilmCard} from './film-card.jsx';
import {mockFilmForTests} from '../../mock/films.js';

const children = <div className="children-component"></div>;

it(`Проверяет снепшот компонента FilmCard`, () => {
  const tree = renderer.create(
      <FilmCard
        film={mockFilmForTests}
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
