import * as React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mockFilmsForTests} from '../../mock/films';
import history from '../../history';
import {Router} from 'react-router-dom';
import {MyList} from './my-list';
import {AuthorizationStatus} from '../../constants';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Клик по заголовку вызывает коллбек`, () => {
  const onMyListClick = jest.fn();
  const onFilmCardTitleClick = jest.fn();

  const player = mount(
      <Router
        history={history}
      >
        <MyList
          films={mockFilmsForTests}
          onFilmCardTitleClick={onFilmCardTitleClick}
          onMyListClick={onMyListClick}
          authorizationStatus={AuthorizationStatus.AUTH}
          userAvatar={`img/avatar.jpg`}
        />
      </Router>
  );

  player.find(`.small-movie-card__link`).at(0).simulate(`click`);
  expect(onFilmCardTitleClick).toHaveBeenCalledTimes(1);
});
