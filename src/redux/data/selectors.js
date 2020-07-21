import {createSelector} from "reselect";
import {DEFAULT_GENRE} from '../../constants';
import NameSpace from '../name-space';
import {getActiveGenre} from './../app/selectors';

const NAME_SPACE = NameSpace.DATA;

export const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};

export const getPromoFilm = (state) => {
  return state[NAME_SPACE].promoFilm;
};

export const getFilmComments = (state) => {
  return state[NAME_SPACE].currentFilmComments;
};

export const getIsLoadedFilms = (state) => {
  return state[NAME_SPACE].isLoadedFilms;
};

export const getFilteredFilmsByGenre = createSelector(
    getFilms,
    getActiveGenre,
    (films, genre) => {
      if (genre === DEFAULT_GENRE) {
        return films;
      }

      return films.filter((el) => el.genre === genre);
    }
);

export const getCurrentFilm = createSelector(
    getFilms,
    (state, filmId) => parseInt(filmId, 10),
    (films, filmId) => films.filter((el) => el.id === filmId)[0]
);
