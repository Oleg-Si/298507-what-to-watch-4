import React from 'react';
import PropTypes from 'prop-types';
import {AuthorizationStatus, AppRoute} from './../../constants';
import {Link} from 'react-router-dom';

const AppHeader = (props) => {
  const {
    authorizationStatus,
    userAvatar,
    children,
    className
  } = props;

  const getAuthStatusMarkup = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return (
        <Link to={AppRoute.MY_LIST} >
          <div className="user-block__avatar">
            <img src={userAvatar} alt="User avatar" width="63" height="63" />
          </div>
        </Link>
      );
    } else {
      return (
        <Link
          className="user-block__link"
          to={AppRoute.LOGIN}
        >Sign in</Link>
      );
    }
  };

  return (
    <header className={`page-header ${className}`}>
      <div className="logo">
        <Link
          className="logo__link"
          to={AppRoute.ROOT}
        >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {children}

      <div className="user-block">
        {getAuthStatusMarkup()}
      </div>
    </header>
  );
};

AppHeader.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userAvatar: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default AppHeader;
