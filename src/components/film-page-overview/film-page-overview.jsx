import React from 'react';
import PropTypes from 'prop-types';
import {RatingKey} from './../../constants';

const FilmPageOverview = (props) => {
  const {filmInfo} = props;

  const getRatingDescr = () => {
    const rating = parseFloat(filmInfo.rating);

    if (rating < 2) {
      return RatingKey.BAD;
    } else if (rating >= 2 && rating < 4) {
      return RatingKey.NORMAL;
    } else if (rating >= 4 && rating < 6) {
      return RatingKey.GOOD;
    } else if (rating >= 6 && rating < 8) {
      return RatingKey.VERY_GOOD;
    } else if (rating >= 8) {
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
        {filmInfo.description.map((text) => {
          return (
            <p key={text}>{text}</p>
          );
        })}

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
    rating: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.oneOfType([
      PropTypes.arrayOf(
          PropTypes.string
      ),
      PropTypes.string
    ]).isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired
  }).isRequired,
};

export default FilmPageOverview;
