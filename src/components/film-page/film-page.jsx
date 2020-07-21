import React from 'react';
import PropTypes from 'prop-types';
import TabList from '../tab-list/tab-list.jsx';
import {Tabs, COUNT_MORE_LIKE_THIS_FILMS, AppRoute} from '../../constants';
import {connect} from 'react-redux';
import appActionCreator from './../../redux/app/action-creator';
import FilmPageOverview from './../film-page-overview/film-page-overview.jsx';
import FilmPageDetalis from '../film-page-details/film-page-details.jsx';
import FilmPageReviews from '../film-page-reviews/film-page-reviews.jsx';
import FilmList from './../film-list/film-list.jsx';
import {getActiveTab} from '../../redux/app/selectors.js';
import {getFilms, getFilmComments, getCurrentFilm} from './../../redux/data/selectors';
import AppHeaderMovieCard from './../app-header-movie-card/app-header-movie-card.jsx';
import {getAuthorizationStatus, getUserAvatar} from './../../redux/user/selectors';
import {AuthorizationStatus} from './../../constants';
import AppFooter from '../app-footer/app-footer.jsx';
import {Link} from 'react-router-dom';
import dataOperations from './../../redux/data/operations';
import userOperations from './../../redux/user/operations';

const FilmPage = (props) => {
  const {
    activeTab,
    onTabClick,
    onFilmCardTitleClick,
    films,
    film,
    authorizationStatus,
    userAvatar,
    filmReviews,
    onFavorite,
  } = props;

  const getFilmInfo = () => {
    switch (activeTab) {
      case Tabs.OVERVIEW:
        return <FilmPageOverview
          filmInfo={film}
        />;

      case Tabs.DETAILS:
        return <FilmPageDetalis
          filmInfo={film}
        />;

      case Tabs.REVIEWS:
        return <FilmPageReviews
          filmReviews={filmReviews}
        />;
    }

    return null;
  };

  const getFilmsByCurrentGenre = () => {
    const filteredFilms = films.filter((el) => el.genre === film.genre);
    const currentFilmIndex = filteredFilms.findIndex((el) => el.id === film.id);

    // Удаляем текущий фильм из похожих
    filteredFilms.splice(currentFilmIndex, 1);

    return filteredFilms;
  };

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full" style={{backgroundColor: film.bgColor}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.bgImg} alt={film.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <AppHeaderMovieCard
            authorizationStatus={authorizationStatus}
            userAvatar={userAvatar}
          />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.releaseDate}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                    <symbol id="play-s" viewBox="0 0 19 19">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5" />
                    </symbol>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button" onClick={(evt) => {
                  evt.preventDefault();
                  onFavorite(film.id, +!film.isFavorite);
                }}>
                  {film.isFavorite
                    ? <svg viewBox="0 0 18 14" width="18" height="14"><use xlinkHref="#in-list"></use></svg>
                    : <svg viewBox="0 0 19 20" width="19" height="20"><use xlinkHref="#add"></use></svg>
                  }
                  <span>My list</span>
                </button>

                {authorizationStatus === AuthorizationStatus.AUTH && <Link className="btn movie-card__button" to={`${AppRoute.FILM}/${film.id}${AppRoute.ADD_REVIEW}`}>Add review</Link>}

              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.poster} alt={film.title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">

                <TabList
                  tabs={Object.values(Tabs)}
                  activeTab={activeTab}
                  onTabClick={onTabClick}
                />

              </nav>

              {getFilmInfo()}

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList
            films={getFilmsByCurrentGenre()}
            filmsCount={COUNT_MORE_LIKE_THIS_FILMS}
            onFilmCardTitleClick={onFilmCardTitleClick}
          />

        </section>

        <AppFooter />
      </div>
    </React.Fragment>
  );
};

FilmPage.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    releaseDate: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    bgImg: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    starring: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired
  }).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
      })
  ).isRequired,
  onFilmCardTitleClick: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired,
  filmId: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  userAvatar: PropTypes.string,
  filmReviews: PropTypes.array
};

const mapStateToProps = (state, props) => ({
  activeTab: getActiveTab(state),
  films: getFilms(state),
  authorizationStatus: getAuthorizationStatus(state),
  userAvatar: getUserAvatar(state),
  filmReviews: getFilmComments(state),
  film: getCurrentFilm(state, props.filmId)
});

const mapDispatchToProps = (dispatch, props) => ({
  onTabClick(newTab) {
    if (newTab === Tabs.REVIEWS) {
      dispatch(dataOperations.loadComments(props.filmId));
    }
    dispatch(appActionCreator.filmsPageTabChange(newTab));
  },

  onFilmCardTitleClick(film) {
    dispatch(dataOperations.loadComments(film.id));
  },

  onFavorite(filmId, status) {
    dispatch(userOperations.isFavorite(filmId, status));
  },
});

export {FilmPage};
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
