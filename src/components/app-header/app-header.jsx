import React from 'react';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from './../../constants';

const AppHeader = (props) => {
  const {
    authorizationStatus,
    userAvatar,
    onSignIn,
    children
  } = props;

  const getAuthStatusMarkup = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return (
        <div className="user-block__avatar">
          <img src={userAvatar} alt="User avatar" width="63" height="63" />
        </div>
      );
    } else {
      return <a href="sign-in.html" className="user-block__link" onClick={(evt) => {
        evt.preventDefault();
        onSignIn();
      }}>Sign in</a>;
    }
  };

  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      {children}

      <div className="user-block">
        {getAuthStatusMarkup()}
      </div>
    </header>
  );
};

AppHeader.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  userAvatar: PropTypes.string,
  children: PropTypes.node,
};

export default AppHeader;
