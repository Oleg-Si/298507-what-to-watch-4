import * as React from 'react';
import * as moment from 'moment';

const FilmPageReviews = (props) => {
  const reviews = props.filmReviews;

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

      {!reviews.length ? <p>No reviews, add first review</p> : ``}

      <div className="movie-card__reviews-col">
        {col1.map((el) => (
          <div className="review" key={el.id}>
            <blockquote className="review__quote">
              <p className="review__text">{el.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{el.user.name}</cite>
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
                <cite className="review__author">{el.user.name}</cite>
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
  filmReviews: PropTypes.array.isRequired
};

export default FilmPageReviews;
