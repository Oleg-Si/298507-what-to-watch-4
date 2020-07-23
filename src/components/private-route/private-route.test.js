import React from 'react';
import renderer from 'react-test-renderer';
import PrivateRoute from './private-route.jsx';
import {AuthorizationStatus} from './../../constants';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from './../../redux/name-space';
import {Router} from 'react-router-dom';
import history from './../../history';

const mockStore = configureStore([]);

const MockComponent = () => {
  return (
    <div>
      <p>MockComponent</p>
    </div>
  );
};

describe(`Проверяет снепшоты компонента PrivateRoute`, () => {
  it(`isAuthorizationChecked={false}`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        isAuthorizationChecked: false,
      }
    });
    const tree = renderer.create(
        <Provider
          store={store}
        >
          <Router
            history={history}
          >
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.AUTH}
              isAuthorizationChecked={false}
              exact={true}
              path={`/`}
              render={() => {
                return (
                  <MockComponent />
                );
              }}
            />
          </Router>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`AuthorizationStatus.AUTH`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        isAuthorizationChecked: true,
      }
    });

    const tree = renderer.create(
        <Provider
          store={store}
        >
          <Router
            history={history}
          >
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.AUTH}
              isAuthorizationChecked={true}
              exact={true}
              path={`/`}
              render={() => {
                return (
                  <MockComponent />
                );
              }}
            />
          </Router>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`AuthorizationStatus.NO_AUTH`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        isAuthorizationChecked: true,
      }
    });
    const tree = renderer.create(
        <Provider
          store={store}
        >
          <Router
            history={history}
          >
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              isAuthorizationChecked={true}
              exact={true}
              path={`/`}
              render={() => {
                return (
                  <MockComponent />
                );
              }}
            />
          </Router>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
