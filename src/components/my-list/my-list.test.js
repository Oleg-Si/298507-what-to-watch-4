import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from './../../history';
import {AuthorizationStatus} from './../../constants';
import {MyList} from './my-list.jsx';
import {mockFilmsForTests} from '../../mock/films';

it(`Проверяет снепшот компонента MyList`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <MyList
          films={mockFilmsForTests}
          onFilmCardTitleClick={() => {}}
          onMyListClick={() => {}}
          authorizationStatus={AuthorizationStatus.AUTH}
          userAvatar={`https://4.react.pages.academy/wtw/static/avatar/2.jpg`}
        />
      </Router>, {
        createNodeMock: () => {
          return {};
        }}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
