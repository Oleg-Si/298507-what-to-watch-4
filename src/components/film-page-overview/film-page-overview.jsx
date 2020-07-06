import React from 'react';
import PropTypes from 'prop-types';

const FilmPageOverview = (props) => {
  const {filmInfo} = props;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{filmInfo.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
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
