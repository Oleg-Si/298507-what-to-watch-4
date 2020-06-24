import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import getMockFilm from './mock/films';

const FILM_COUNT = 12;

const getFilms = (count) => {
  const allFilms = [];

  for (let i = 0; i < count; i++) {
    const element = getMockFilm();
    element.id = i;
    allFilms.push(element);
  }

  return allFilms;
};

const promoFilmMock = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`
};

ReactDOM.render(
    <App
      promoFilmMock={promoFilmMock}
      films={getFilms(FILM_COUNT)}
    />,
    document.querySelector(`#root`)
);
