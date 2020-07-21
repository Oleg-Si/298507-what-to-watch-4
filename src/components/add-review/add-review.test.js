import React from 'react';
import renderer from 'react-test-renderer';
import {mockFilmForTests} from '../../mock/films.js';
import {AddReview} from './add-review';
import {AuthorizationStatus} from './../../constants';
import {Router} from 'react-router-dom';
import history from '../../history.js';

it(`Проверяет снепшот компонента AddReview`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <AddReview
          isValid={true}
          isSend={false}
          authorizationStatus={AuthorizationStatus.AUTH}
          film={mockFilmForTests}
          onCheckValidCommentLength={() => {}}
          onSend={() => {}}
          onAddReviews={() => {}}
          userAvatar={`img/avatar.jpg`}
          filmId={`1`}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
