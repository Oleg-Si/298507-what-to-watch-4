import ActionType from './action-type';

const ActionCreator = {
  filterFilmsByGenre: (filteredFilms) => ({
    type: ActionType.FILTER_FILMS_BY_GENRE,
    payload: filteredFilms
  }),

  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: {
      films,
      promoFilm: films[0]
    }
  })
};

export default ActionCreator;
