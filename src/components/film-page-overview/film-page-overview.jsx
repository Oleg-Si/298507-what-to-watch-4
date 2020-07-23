import React from 'react';
import PropTypes from 'prop-types';
import {RatingKey} from './../../constants';

const FilmPageOverview = (props) => {
  const {filmInfo} = props;

  const getRatingDescr = () => {
    const rating = parseFloat(filmInfo.rating);

    if (rating >= 0 && rating < 3) {
      return RatingKey.BAD;
    } else if (rating >= 3 && rating < 5) {
      return RatingKey.NORMAL;
    } else if (rating >= 5 && rating < 8) {
      return RatingKey.GOOD;
    } else if (rating >= 8 && rating < 10) {
      return RatingKey.VERY_GOOD;
    } else if (rating >= 10) {
      return RatingKey.AWESOME;
    }

    return rating;
  };

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{filmInfo.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getRatingDescr()}</span>
          <span className="movie-rating__count">{filmInfo.ratingCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{filmInfo.description}</p>
        <p className="movie-card__director"><strong>Director: {filmInfo.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {filmInfo.starring.join(`, `)}</strong></p>
      </div>
    </React.Fragment>
  );
};

FilmPageOverview.propTypes = {
  filmInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    releaseDate: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired
  }).isRequired,
};

export default FilmPageOverview;
