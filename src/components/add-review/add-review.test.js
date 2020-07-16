import React from 'react';
import renderer from 'react-test-renderer';
import {mockReviews} from '../../mock/films.js';
import {AddReview} from './add-review';

it(`Проверяет снепшот компонента AddReview`, () => {
  const tree = renderer.create(
      <AddReview
        filmReviews={mockReviews}
        isCorrectCommentLength={true}
        filmId={1}
        onSubmit={() => {}}
        onTextareaChange={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
