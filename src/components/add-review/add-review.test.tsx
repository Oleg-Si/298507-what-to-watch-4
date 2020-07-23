import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {mockFilmForTests} from '../../mock/films';
import {AddReview} from './add-review';
import {AuthorizationStatus} from '../../constants';
import {Router} from 'react-router-dom';
import history from '../../history';

it(`Проверяет снепшот компонента AddReview`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <AddReview
          isValid={true}
          isSend={false}
          isError={false}
          authorizationStatus={AuthorizationStatus.AUTH}
          film={mockFilmForTests}
          onCheckValidCommentLength={() => null}
          onSend={() => null}
          onAddReviews={() => null}
          onMyListClick={() => null}
          changeIsErrorStatus={() => null}
          userAvatar={`img/avatar.jpg`}
          filmId={`1`}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
