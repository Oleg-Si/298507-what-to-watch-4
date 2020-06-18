import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const promoFilmMock = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`
};

const films = [`Fantastic Beasts: The Crimes of Grindelwald`, `The Grand Budapest Hotel`, `Bohemian Rhapsody`, `Macbeth`];

const onFilmCardTitleClick = () => {};

it(`Main should render main screen`, () => {
  const tree = renderer.create(
      <Main
        promoFilmMock={promoFilmMock}
        films={films}
        onFilmCardTitleClick={onFilmCardTitleClick}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
