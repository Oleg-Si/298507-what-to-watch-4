import {createSelector} from "reselect";
import {DEFAULT_GENRE} from './../constants';

export const getFilms = (state) => {
  return state.films;
};

export const getActiveGenre = (state) => {
  return state.activeGenre;
};

export const getFilmsByGenre = createSelector(
    getFilms,
    getActiveGenre,
    (films, genre) => {
      if (genre === DEFAULT_GENRE) {
        return films;
      }

      return films.filter((el) => el.genre === genre);
    }
);
