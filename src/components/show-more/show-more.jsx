import React from 'react';
import PropTypes from 'prop-types';

const ShowMore = (props) => {
  const {
    onShowMoreClick,
    filmsCount,
    allFilmsCount
  } = props;

  const isMoreFilms = () => {
    if (filmsCount < allFilmsCount) {
      return <button className="catalog__button" type="button" onClick={onShowMoreClick}>Show more</button>;
    }

    return null;
  };

  return (
    <div className="catalog__more">
      {isMoreFilms()}
    </div>
  );
};

ShowMore.propTypes = {
  onShowMoreClick: PropTypes.func.isRequired,
  filmsCount: PropTypes.number.isRequired,
  allFilmsCount: PropTypes.number.isRequired
};

export default ShowMore;
