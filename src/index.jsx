import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import films from './mock/films';

const promoFilmMock = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`
};

const onFilmCardTitleClick = (e) => {
  e.preventDefault();
  // Клик по заголовку
};

ReactDOM.render(
    <App
      promoFilmMock={promoFilmMock}
      films={films}
      onFilmCardTitleClick={onFilmCardTitleClick}
    />,
    document.querySelector(`#root`)
);
