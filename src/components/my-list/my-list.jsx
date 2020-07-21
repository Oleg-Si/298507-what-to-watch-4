import React from 'react';
import PropTypes from 'prop-types';
import AppHeaderMyList from './../app-header-my-list/app-header-my-list.jsx';
import AppFooter from './../app-footer/app-footer.jsx';
import {connect} from 'react-redux';
import dataOperations from './../../redux/data/operations';
import {getFavoriteFilms} from '../../redux/data/selectors.js';
import FilmList from './../film-list/film-list.jsx';
import {getAuthorizationStatus, getUserAvatar} from './../../redux/user/selectors';


const MyList = (props) => {
  const {
    films,
    onFilmCardTitleClick,
    authorizationStatus,
    userAvatar
  } = props;

  return (
    <div className="user-page">

      <AppHeaderMyList
        authorizationStatus={authorizationStatus}
        userAvatar={userAvatar}
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

MyList.propTypes = {
  films: PropTypes.array.isRequired,
  onFilmCardTitleClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  userAvatar: PropTypes.string,
};

const mapStateToProps = (state) => ({
  films: getFavoriteFilms(state),
  authorizationStatus: getAuthorizationStatus(state),
  userAvatar: getUserAvatar(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFilmCardTitleClick(film) {
    dispatch(dataOperations.loadComments(film.id));
  }
});


export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
