import React from 'react';
import renderer from 'react-test-renderer';
import {mockReviews, mockFilmForTests} from '../../mock/films.js';
import {AddReview} from './add-review';
import {AuthorizationStatus} from './../../constants';

it(`Проверяет снепшот компонента AddReview`, () => {
  const tree = renderer.create(
      <AddReview
        filmReviews={mockReviews}
        isCorrectCommentLength={true}
        authorizationStatus={AuthorizationStatus.AUTH}
        film={mockFilmForTests}
        onSubmit={() => {}}
        onTextareaChange={() => {}}
        onSignIn={() => {}}
        userAvatar={`img/avatar.jpg`}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
