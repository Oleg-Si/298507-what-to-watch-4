import * as React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignIn from './sign-in';
import {Router} from 'react-router-dom';
import history from '../../history';
import {APIErrorsCode} from '../../constants';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Отправка формы вызывает коллбэк`, () => {
  const onSubmit = jest.fn();

  const signIn = mount(
      <Router
        history={history}
      >
        <SignIn
          onSubmit={onSubmit}
          authorizationStatusCode={APIErrorsCode.BAD_REQUEST}
        />
      </Router>
  );

  signIn.find(`#user-email`).instance().value = `userLogin`;
  signIn.find(`#user-password`).instance().value = `userPass`;

  signIn.find(`.sign-in__form`).simulate(`submit`);

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit.mock.calls[0]).toEqual([{login: `userLogin`, password: `userPass`}]);
});
