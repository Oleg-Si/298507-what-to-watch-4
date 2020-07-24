import * as React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, preloaderMainStyle} from '../../constants';
import {connect} from 'react-redux';
import {getAuthorizationStatus, getIsAuthorizationChecked} from '../../redux/user/selectors';
import Preloader from '../preloader/preloader';

interface Props {
  authorizationStatus: string,
  exact: boolean,
  path: string,
  render: (renderProps: () => React.ReactNode) => React.ReactNode,
  isAuthorizationChecked: boolean
}

const PrivateRoute: React.FC<Props> = (props: Props) => {
  const {
    authorizationStatus,
    render,
    path,
    exact,
    isAuthorizationChecked
  } = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(renderProps: () => React.ReactNode) => {

        if (isAuthorizationChecked) {
          return (
            authorizationStatus === AuthorizationStatus.AUTH
              ? render(renderProps)
              : <Redirect to={AppRoute.LOGIN} />
          );
        }

        return <Preloader style={preloaderMainStyle} />;
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  isAuthorizationChecked: getIsAuthorizationChecked(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
