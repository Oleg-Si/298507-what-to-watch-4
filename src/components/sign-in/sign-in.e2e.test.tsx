import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {SignIn} from './sign-in';
import {Router} from 'react-router-dom';
import history from '../../history';
import {APIErrorsCode, AuthorizationStatus} from '../../constants';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Отправка формы вызывает коллбэк`, () => {
  const onSubmit = jest.fn();

  const signIn = Enzyme.mount(
      <Router
        history={history}
      >
        <SignIn
          onSubmit={onSubmit}
          authorizationStatusCode={APIErrorsCode.BAD_REQUEST}
          onMyListClick={() => null}
          authorizationStatus={AuthorizationStatus.AUTH}
          userAvatar={`https://4.react.pages.academy/wtw/static/avatar/2.jpg`}
        />
      </Router>
  );

  signIn.find(`#user-email`).instance().value = `userLogin`;
  signIn.find(`#user-password`).instance().value = `userPass`;

  signIn.find(`.sign-in__form`).simulate(`submit`);

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit.mock.calls[0]).toEqual([{login: `userLogin`, password: `userPass`}]);
});
