import * as React from 'react';
import TabList from '../tab-list/tab-list';
import {Tabs, COUNT_MORE_LIKE_THIS_FILMS, AppRoute} from '../../constants';
import {connect} from 'react-redux';
import appActionCreator from '../../redux/app/action-creator';
import FilmPageOverview from '../film-page-overview/film-page-overview';
import FilmPageDetalis from '../film-page-details/film-page-details';
import FilmPageReviews from '../film-page-reviews/film-page-reviews';
import FilmList from '../film-list/film-list';
import {getActiveTab} from '../../redux/app/selectors';
import {getFilms, getFilmComments, getCurrentFilm} from '../../redux/data/selectors';
import AppHeaderMovieCard from '../app-header-movie-card/app-header-movie-card';
import {getAuthorizationStatus, getUserAvatar} from '../../redux/user/selectors';
import {AuthorizationStatus} from '../../constants';
import AppFooter from '../app-footer/app-footer';
import {Link} from 'react-router-dom';
import dataOperations from '../../redux/data/operations';
import userOperations from '../../redux/user/operations';
import history from '../../history';
import {FilmInterface, FilmReviewInterface} from './../../types';

interface Props {
  film: FilmInterface;
  activeTab: string;
  onTabClick: (newTab: string) => void;
  films: FilmInterface[];
  onFilmCardTitleClick: (film: FilmInterface) => void;
  onFavorite: (filmId: number, filmIsFavorite: number) => void;
  onMyListClick: () => void;
  onPlayClick: (filmId: number) => void;
  filmId: number;
  authorizationStatus: AuthorizationStatus;
  userAvatar: string;
  filmReviews: FilmReviewInterface[];
}

const FilmPage: React.FC<Props> = (props: Props) => {
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
    onMyListClick,
    onPlayClick
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
    const filteredFilms = films.filter((filmItem) => filmItem.genre === film.genre);
    const currentFilmIndex = filteredFilms.findIndex((filmItem) => filmItem.id === film.id);

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
            onMyListClick={onMyListClick}
          />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.releaseDate}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => {
                  onPlayClick(film.id);
                }}>
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

  onMyListClick() {
    dispatch(dataOperations.loadFavoriteFilms());
  },

  onPlayClick(filmId) {
    history.push(`${AppRoute.PLAYER}/${filmId}`);
  }
});

export {FilmPage};
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
