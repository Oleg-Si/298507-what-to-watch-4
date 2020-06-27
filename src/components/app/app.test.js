import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const promoFilmMock = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`
};

const films = [
  {
    id: 0,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    src: `src1`
  },
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    img: `img/bohemian-rhapsody.jpg`,
    src: `src2`
  },
  {
    id: 2,
    title: `Macbeth`,
    img: `img/macbeth.jpg`,
    src: `src3`
  },
  {
    id: 3,
    title: `Aviator`,
    img: `img/aviator.jpg`,
    src: `src4`
  }
];

const onFilmCardTitleClick = () => {};

it(`Проверяет снепшот компонента App`, () => {
  const tree = renderer.create(
      <App
        promoFilmMock={promoFilmMock}
        films={films}
        onFilmCardTitleClick={onFilmCardTitleClick}
      />, {
        createNodeMock: () => {
          return {};
        }}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
