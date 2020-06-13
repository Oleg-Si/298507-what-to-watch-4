import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const promoFilmMock = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`
};

const films = [`Fantastic Beasts: The Crimes of Grindelwald`, `The Grand Budapest Hotel`, `Bohemian Rhapsody`, `Macbeth`];

ReactDOM.render(
    <App promoFilmMock = {promoFilmMock} films = {films} />,
    document.querySelector(`#root`)
);