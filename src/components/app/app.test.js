import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const promoFilmMock = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`
};

const films = [`Fantastic Beasts: The Crimes of Grindelwald`, `The Grand Budapest Hotel`, `Bohemian Rhapsody`, `Macbeth`];

const onFilmCardTitleClick = () => {};

it(`App should render application`, () => {
  const tree = renderer.create(
      <App
        promoFilmMock={promoFilmMock}
        films={films}
        onFilmCardTitleClick={onFilmCardTitleClick}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
