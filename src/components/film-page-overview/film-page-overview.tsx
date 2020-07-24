import * as React from 'react';
import {RatingKeys} from '../../constants';
import {FilmInterface} from '../../types';

interface Props {
  filmInfo: FilmInterface;
}

const FilmPageOverview: React.FC<Props> = (props: Props) => {
  const {filmInfo} = props;

  const getRatingDescr = () => {
    const rating = filmInfo.rating;

    if (rating >= 0 && rating < 3) {
      return RatingKeys.BAD;
    } else if (rating >= 3 && rating < 5) {
      return RatingKeys.NORMAL;
    } else if (rating >= 5 && rating < 8) {
      return RatingKeys.GOOD;
    } else if (rating >= 8 && rating < 10) {
      return RatingKeys.VERY_GOOD;
    } else if (rating >= 10) {
      return RatingKeys.AWESOME;
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

export default FilmPageOverview;
