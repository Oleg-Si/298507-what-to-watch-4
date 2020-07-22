import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../api';
import ActionType from './action-type';
import Operation from './operations';
import {createFilm} from '../../adapter';
import {mockReviews} from '../../mock/films';
import appActionType from './../app/action-type';

const mockServerFilm = {
  "id": 1,
  "name": `The Grand Budapest Hotel`,
  "poster_image": `img/the-grand-budapest-hotel-poster.jpg`,
  "preview_image": `img/the-grand-budapest-hotel.jpg`,
  "background_image": `img/the-grand-budapest-hotel-bg.jpg`,
  "background_color": `#ffffff`,
  "video_link": `https://some-link`,
  "preview_video_link": `https://some-link`,
  "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  "rating": 8.9,
  "scores_count": 240,
  "director": `Wes Andreson`,
  "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  "run_time": 99,
  "genre": `Comedy`,
  "released": 2014,
  "is_favorite": false
};


const api = createAPI(() => {});

it(`Operation должен сделать корректный запрос /films`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const filmsLoader = Operation.loadFilms();

  apiMock
    .onGet(`/films`)
    .reply(200, mockServerFilm);

  return filmsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FILMS,
        payload: createFilm(mockServerFilm)
      });
    });
});

it(`Operation должен сделать корректный запрос /films/promo`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const promoFilmLoader = Operation.loadPromoFilm();

  apiMock
    .onGet(`/films/promo`)
    .reply(200, mockServerFilm);

  return promoFilmLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_PROMO_FILM,
        payload: createFilm(mockServerFilm)
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: appActionType.CHANGE_PROMO_FILM_STATUS,
        payload: createFilm(mockServerFilm).isFavorite
      });
    });
});

it(`Operation должен сделать корректный запрос /comments/0`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const commentsFilmLoader = Operation.loadComments(0);

  apiMock
    .onGet(`/comments/0`)
    .reply(200, mockReviews);

  return commentsFilmLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.ADD_FILM_COMMENTS,
        payload: mockReviews
      });
    });
});

it(`Operation должен сделать корректный запрос /favorite`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const favoriteFilmsLoader = Operation.loadFavoriteFilms();

  apiMock
    .onGet(`/favorite`)
    .reply(200, mockServerFilm);

  return favoriteFilmsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FAVORITE_FILMS,
        payload: createFilm(mockServerFilm)
      });
    });
});
