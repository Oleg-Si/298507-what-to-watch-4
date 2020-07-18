import React from 'react';
import PropTypes from 'prop-types';
import TabList from '../tab-list/tab-list.jsx';
import {Tabs, COUNT_MORE_LIKE_THIS_FILMS} from '../../constants';
import {connect} from 'react-redux';
import appActionCreator from './../../redux/app/action-creator';
import FilmPageOverview from './../film-page-overview/film-page-overview.jsx';
import FilmPageDetalis from '../film-page-details/film-page-details.jsx';
import FilmPageReviews from '../film-page-reviews/film-page-reviews.jsx';
import FilmList from './../film-list/film-list.jsx';
import {getActiveTab} from '../../redux/app/selectors.js';
import {getFilms, getFilmComments} from './../../redux/data/selectors';
import AppHeader from '../app-header/app-header.jsx';
import {getAuthorizationStatus, getUserAvatar} from './../../redux/user/selectors';
import {Screens, AuthorizationStatus} from './../../constants';

const FilmPage = (props) => {
  const filmInfo = props.activeFilm;
  const {
    activeTab,
    onTabClick,
    onFilmCardTitleClick,
    films,
    authorizationStatus,
    onSignInClick,
    userAvatar,
    onAddReview,
    filmReviews
  } = props;

  const getFilmInfo = () => {
    switch (activeTab) {
      case Tabs.OVERVIEW:
        return <FilmPageOverview
          filmInfo={filmInfo}
        />;

      case Tabs.DETAILS:
        return <FilmPageDetalis
          filmInfo={filmInfo}
        />;

      case Tabs.REVIEWS:
        return <FilmPageReviews
          filmReviews={filmReviews}
        />;
    }

    return null;
  };

  const getFilmsByCurrentGenre = () => {
    const filteredFilms = films.filter((el) => el.genre === filmInfo.genre);
    const currentFilmIndex = filteredFilms.findIndex((el) => el.id === filmInfo.id);

    // Удаляем текущий фильм из похожих
    filteredFilms.splice(currentFilmIndex, 1);

    return filteredFilms;
  };

  const getButtonAddReview = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return <a href="add-review.html" className="btn movie-card__button" onClick={(evt) => {
        evt.preventDefault();
        onAddReview();
      }}>Add review</a>;
    }

    return null;
  };

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full" style={{backgroundColor: filmInfo.bgColor}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={filmInfo.bgImg} alt={filmInfo.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <AppHeader
            authorizationStatus={authorizationStatus}
            userAvatar={userAvatar}
            onSignIn={onSignInClick}
          />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{filmInfo.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{filmInfo.genre}</span>
                <span className="movie-card__year">{filmInfo.releaseDate}</span>
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
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>

                {getButtonAddReview()}

              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={filmInfo.poster} alt={filmInfo.title} width="218" height="327" />
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

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2020 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

FilmPage.propTypes = {
  activeFilm: PropTypes.shape({
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
  onAddReview: PropTypes.func.isRequired,
  onSignInClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  userAvatar: PropTypes.string,
  filmReviews: PropTypes.array
};

const mapStateToProps = (state) => ({
  activeTab: getActiveTab(state),
  films: getFilms(state),
  authorizationStatus: getAuthorizationStatus(state),
  userAvatar: getUserAvatar(state),
  filmReviews: getFilmComments(state)
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick(newTab) {
    dispatch(appActionCreator.filmsPageTabChange(newTab));
  },

  onSignInClick() {
    dispatch(appActionCreator.changeScreen(Screens.SIGN_IN));
  },

  onAddReview() {
    dispatch(appActionCreator.changeScreen(Screens.ADD_REVIEW));
  }
});

export {FilmPage};
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
