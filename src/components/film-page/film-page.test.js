import React from 'react';
import renderer from 'react-test-renderer';
import FilmPage from './film-page.jsx';

const film = {
  id: 0,
  title: `Revenant`,
  img: `img/revenant.jpg`,
  genre: `Drama`,
  rating: `8.5`,
  releaseDate: 1552915226386,
  ratingCount: 148,
  description: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&aposs friend and protege.`, `Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&aposs lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],
  director: `Bill Murray`,
  starring: [`Edward Norton`, `Jude Law`, `Willem Dafoe and other`, `Wes Andreson`]
};

it(`Проверяет снепшот компонента FilmPage`, () => {
  const tree = renderer.create(
      <FilmPage
        activeFilm={film}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
