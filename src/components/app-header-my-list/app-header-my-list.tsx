import * as React from 'react';
import AppHeader from '../app-header/app-header';
import {AuthorizationStatus} from '../../constants';

interface Props {
  authorizationStatus: AuthorizationStatus,
  userAvatar: string,
  className: string,
  onMyListClick: () => void
}

const AppHeaderMyList: React.FC<Props> = (props) => {
  return (
    <AppHeader {...props} className="user-page__head" />
  );
};

export default AppHeaderMyList;

