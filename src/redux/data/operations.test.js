import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../api';
import ActionType from './action-type';
import Operation from './operations';
import {mockFilmForTests} from '../../mock/films';


const api = createAPI(() => {});

it(`Operation должен сделать корректный запрос`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const questionLoader = Operation.loadFilms();

  apiMock
    .onGet(`/films`)
    .reply(200, mockFilmForTests);

  return questionLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FILMS,
        payload: {
          films: mockFilmForTests,
          promoFilm: mockFilmForTests[0]
        },
      });
    });
});
