import * as React from 'react';
import {AuthorizationStatus, AppRoute} from '../../constants';
import {Link} from 'react-router-dom';

interface Props {
  authorizationStatus: AuthorizationStatus;
  onMyListClick: () => void;
  userAvatar: string;
  className?: string;
  children?: React.ReactNode;
}

const AppHeader: React.FC<Props> = (props: Props) => {
  const {
    authorizationStatus,
    userAvatar,
    children,
    className,
    onMyListClick
  } = props;

  const getAuthStatusMarkup = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return (
        <Link
          onClick={onMyListClick}
          to={AppRoute.MY_LIST}
        >
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

export default AppHeader;
