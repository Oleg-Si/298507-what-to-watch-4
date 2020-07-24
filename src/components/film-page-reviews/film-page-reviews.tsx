import * as React from 'react';
import * as moment from 'moment';
import {FilmReviewInterface} from '../../types';

interface Props {
  filmReviews: FilmReviewInterface[];
}

const FilmPageReviews: React.FC<Props> = (props: Props) => {
  const reviews = props.filmReviews;

  const column1 = [];
  const column2 = [];

  reviews.forEach((review, index) => {
    if (index % 2 === 0) {
      column1.push(review);
    } else {
      column2.push(review);
    }
  });

  return (
    <div className="movie-card__reviews movie-card__row">

      {!reviews.length ? <p>No reviews, add first review</p> : ``}

      <div className="movie-card__reviews-col">
        {column1.map((review) => (
          <div className="review" key={review.id}>
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{review.user.name}</cite>
                <time className="review__date" dateTime={moment(review.date).format(`YYYY-M-D`)}>{moment(review.date).format(`LL`)}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating}</div>
          </div>
        ))}
      </div>

      <div className="movie-card__reviews-col">
        {column2.map((review) => (
          <div className="review" key={review.date}>
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{review.user.name}</cite>
                <time className="review__date" dateTime={moment(review.date).format(`YYYY-M-D`)}>{moment(review.date).format(`LL`)}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmPageReviews;
