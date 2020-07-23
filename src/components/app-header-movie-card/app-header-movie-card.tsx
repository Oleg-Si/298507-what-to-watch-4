import * as React from 'react';
import AppHeader from '../app-header/app-header';

const AppHeaderMovieCard = (props) => {
  return (
    <AppHeader {...props} className="movie-card__head" />
  );
};

export default AppHeaderMovieCard;
