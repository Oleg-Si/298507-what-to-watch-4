import * as React from 'react';
import AppHeaderMyList from '../app-header-my-list/app-header-my-list';
import AppFooter from '../app-footer/app-footer';
import {connect} from 'react-redux';
import dataOperations from '../../redux/data/operations';
import {getFavoriteFilms} from '../../redux/data/selectors';
import FilmList from '../film-list/film-list';
import {getAuthorizationStatus, getUserAvatar} from '../../redux/user/selectors';
import {AuthorizationStatus} from '../../constants';
import {FilmInterface} from './../../types';

interface Props {
  films: FilmInterface[],
  onFilmCardTitleClick: (film: FilmInterface) => void,
  onMyListClick: () => void,
  authorizationStatus: AuthorizationStatus,
  userAvatar: string,
}

const MyList: React.FC<Props> = (props: Props) => {
  const {
    films,
    onFilmCardTitleClick,
    authorizationStatus,
    userAvatar,
    onMyListClick
  } = props;

  return (
    <div className="user-page">

      <AppHeaderMyList
        authorizationStatus={authorizationStatus}
        userAvatar={userAvatar}
        onMyListClick={onMyListClick}
      >
        <h1 className="page-title user-page__title">My list</h1>
      </AppHeaderMyList>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList
          films={films}
          filmsCount={films.length}
          onFilmCardTitleClick={onFilmCardTitleClick}
        />
      </section>

      <AppFooter />
    </div>
  );
};

const mapStateToProps = (state) => ({
  films: getFavoriteFilms(state),
  authorizationStatus: getAuthorizationStatus(state),
  userAvatar: getUserAvatar(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFilmCardTitleClick(film) {
    dispatch(dataOperations.loadComments(film.id));
  },

  onMyListClick() {
    dispatch(dataOperations.loadFavoriteFilms());
  }
});


export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
