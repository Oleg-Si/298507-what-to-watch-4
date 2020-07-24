import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import {AuthorizationStatus} from '../../constants';
import {MyList} from './my-list';
import {mockFilmsForTests} from '../../mock/films';

it(`Проверяет снепшот компонента MyList`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <MyList
          films={mockFilmsForTests}
          onFilmCardTitleClick={() => null}
          onMyListClick={() => null}
          authorizationStatus={AuthorizationStatus.AUTH}
          userAvatar={`https://4.react.pages.academy/wtw/static/avatar/2.jpg`}
        />
      </Router>, {
        createNodeMock: () => {
          return {
            addEventListener: () => {}
          };
        }}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
