import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const promoFilmMock = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`
};

const films = [
  {
    id: 0,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    img: `img/bohemian-rhapsody.jpg`
  },
  {
    id: 2,
    title: `Macbeth`,
    img: `img/macbeth.jpg`
  },
  {
    id: 3,
    title: `Aviator`,
    img: `img/aviator.jpg`
  }
];

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
