import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, preloaderMainStyle} from './../../constants';
import {connect} from 'react-redux';
import {getAuthorizationStatus, getIsAuthorizationChecked} from './../../redux/user/selectors';
import Preloader from '../preloader/preloader.jsx';

const PrivateRoute = (props) => {
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
      render={(renderProps) => {

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

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  isAuthorizationChecked: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  isAuthorizationChecked: getIsAuthorizationChecked(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
