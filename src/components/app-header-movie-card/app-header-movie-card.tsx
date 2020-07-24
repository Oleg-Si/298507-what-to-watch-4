import * as React from 'react';
import AppHeader from '../app-header/app-header';
import {AuthorizationStatus} from '../../constants';

interface Props {
  authorizationStatus: AuthorizationStatus;
  userAvatar: string;
  className?: string;
  onMyListClick: () => void;
}

const AppHeaderMovieCard: React.FC<Props> = (props: Props) => {
  return (
    <AppHeader {...props} className="movie-card__head" />
  );
};

export default AppHeaderMovieCard;
