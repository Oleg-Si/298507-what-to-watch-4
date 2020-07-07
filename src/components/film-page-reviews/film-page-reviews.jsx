import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const FilmPageReviews = (props) => {
  const reviews = props.filmInfo.reviews;

  const col1 = [];
  const col2 = [];

  reviews.forEach((el, i) => {
    if (i % 2 === 0) {
      col1.push(el);
    } else {
      col2.push(el);
    }
  });

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {col1.map((el) => (
          <div className="review" key={el.date}>
            <blockquote className="review__quote">
              <p className="review__text">{el.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{el.author}</cite>
                <time className="review__date" dateTime={moment(el.date).format(`YYYY-M-D`)}>{moment(el.date).format(`LL`)}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{el.rating}</div>
          </div>
        ))}
      </div>

      <div className="movie-card__reviews-col">
        {col2.map((el) => (
          <div className="review" key={el.date}>
            <blockquote className="review__quote">
              <p className="review__text">{el.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{el.author}</cite>
                <time className="review__date" dateTime={moment(el.date).format(`YYYY-M-D`)}>{moment(el.date).format(`LL`)}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{el.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

FilmPageReviews.propTypes = {
  filmInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    runTime: PropTypes.number.isRequired,
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
    ).isRequired,
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          author: PropTypes.string.isRequired,
          rating: PropTypes.string.isRequired,
          date: PropTypes.number.isRequired,
          comment: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
  }).isRequired
};

export default FilmPageReviews;
