import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {films, promoFilmMock, onFilmCardTitleClick} = props;

  return (
    <Main
      promoFilmMock={promoFilmMock}
      films={films}
      onFilmCardTitleClick={onFilmCardTitleClick}
    />
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
      })
  ).isRequired,
  promoFilmMock: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }),
  onFilmCardTitleClick: PropTypes.func.isRequired
};

export default App;
