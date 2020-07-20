import React from 'react';
import renderer from 'react-test-renderer';
import {FilmCard} from './film-card.jsx';
import {mockFilmForTests} from '../../mock/films.js';
import {Router} from 'react-router-dom';
import history from './../../history';

const children = <div className="children-component"></div>;

it(`Проверяет снепшот компонента FilmCard`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <FilmCard
          film={mockFilmForTests}
          onFilmCardTitleClick={() => {}}
          onPlay={() => {}}
          onStop={() => {}}
        >{children}</FilmCard>
      </Router>, {
        createNodeMock: () => {
          return {};
        }}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
