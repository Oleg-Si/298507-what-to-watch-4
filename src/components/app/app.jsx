import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {films, promoFilmMock} = props;

  return <Main promoFilmMock={promoFilmMock} films={films} />;
};

App.propTypes = {
  promoFilmMock: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }),
  films: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
