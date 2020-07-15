import React from 'react';
import PropTypes from 'prop-types';
import FilmList from './../film-list/film-list.jsx';
import GenreFilter from '../genre-filter/genre-filter.jsx';
import {connect} from 'react-redux';
import dataActionCreator from '../../redux/data/action-creator';
import appActionCreator from '../../redux/app/action-creator';
import {DEFAULT_GENRE, AuthorizationStatus} from './../../constants';
import ShowMore from '../show-more/show-more.jsx';
import {getPromoFilm, getFilteredFilmsByGenre, getFilms} from './../../redux/data/selectors';
import {getActiveGenre, getCountFilmsForRender} from './../../redux/app/selectors';
import {getAuthorizationStatus} from './../../redux/user/selectors';

const Main = (props) => {
  const {
    promoFilm,
    films,
    filteredFilms,
    onGenreCilck,
    activeGenre,
    onFilmCardTitleClick,
    filmsCount,
    onShowMoreClick,
    authorizationStatus
  } = props;

  const getAllgenre = (data) => {
    const allGenre = new Set();
    allGenre.add(DEFAULT_GENRE);

    data.forEach((el) => {
      allGenre.add(el.genre);
    });

    return allGenre;
  };

  const genre = getAllgenre(films);

  const getAuthStatusMarkup = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return (
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      );
    } else {
      return <a href="sign-in.html" className="user-block__link">Sign in</a>;
    }
  };

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoFilm.bgImg} alt={promoFilm.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            {getAuthStatusMarkup()}
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoFilm.poster} alt={promoFilm.title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoFilm.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoFilm.genre}</span>
                <span className="movie-card__year">{promoFilm.releaseDate}</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreFilter
            genre={Array.from(genre)}
            activeTab={activeGenre}
            onTabClick={onGenreCilck}
          />

          <FilmList
            films={filteredFilms}
            filmsCount={filmsCount}
            onFilmCardTitleClick={onFilmCardTitleClick}
          />

          <ShowMore
            allFilmsCount={filteredFilms.length}
            filmsCount={filmsCount}
            onShowMoreClick={onShowMoreClick}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  promoFilm: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    releaseDate: PropTypes.number,
    bgImg: PropTypes.string,
    poster: PropTypes.string,
  }),
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
      })
  ).isRequired,
  filteredFilms: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
      })
  ).isRequired,
  onFilmCardTitleClick: PropTypes.func.isRequired,
  onGenreCilck: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  filmsCount: PropTypes.number.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  activeGenre: getActiveGenre(state),
  films: getFilms(state),
  promoFilm: getPromoFilm(state),
  filmsCount: getCountFilmsForRender(state),
  filteredFilms: getFilteredFilmsByGenre(state),
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onGenreCilck(newGenre) {
    dispatch(appActionCreator.genreFilterChange(newGenre));
    dispatch(dataActionCreator.filterFilmsByGenre());
  },

  onShowMoreClick(filmsCount) {
    dispatch(appActionCreator.showMoreFilms(filmsCount));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
