import ActionType from './action-type';

const ActionCreator = {
  filterFilmsByGenre: (filteredFilms) => ({
    type: ActionType.FILTER_FILMS_BY_GENRE,
    payload: filteredFilms
  }),

  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),

  loadPromoFilm: (film) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: film
  }),

  addFilmComments: (comments) => ({
    type: ActionType.ADD_FILM_COMMENTS,
    payload: comments
  }),

  loadFavoriteFilms: (films) => ({
    type: ActionType.LOAD_FAVORITE_FILMS,
    payload: films
  })
};

export default ActionCreator;
