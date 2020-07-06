import React from 'react';
import PropTypes from 'prop-types';
import TabList from '../tab-list/tab-list.jsx';
import {Tabs, COUNT_MORE_LIKE_THIS_FILMS} from '../../constants';
import {connect} from 'react-redux';
import {ActionCreator} from './../../redux/action-creator';
import FilmPageOverview from './../film-page-overview/film-page-overview.jsx';
import FilmPageDetalis from '../film-page-details/film-page-details.jsx';
import FilmPageReviews from '../film-page-reviews/film-page-reviews.jsx';
import FilmList from './../film-list/film-list.jsx';

const FilmPage = (props) => {
  const filmInfo = props.activeFilm;
  const {activeTab, onTabClick, onFilmCardTitleClick, films} = props;

  const getFilmInfo = () => {
    switch (activeTab) {
      case `Overview`:
        return <FilmPageOverview
          filmInfo={filmInfo}
        />;

      case `Details`:
        return <FilmPageDetalis
          filmInfo={filmInfo}
        />;

      case `Reviews`:
        return <FilmPageReviews
          filmInfo={filmInfo}
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

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{filmInfo.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{filmInfo.genre}</span>
                <span className="movie-card__year">{new Date(filmInfo.releaseDate).getFullYear()}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">

                <TabList
                  tabs={Tabs}
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
            <p>© 2019 What to watch Ltd.</p>
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
    rating: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.oneOfType([
      PropTypes.arrayOf(
          PropTypes.string
      ),
      PropTypes.string
    ]).isRequired,
    director: PropTypes.string.isRequired,
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
  onFilmCardTitleClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
  films: state.films
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick(newTab) {
    dispatch(ActionCreator.filmsPageTabChange(newTab));
  }
});

export {FilmPage};
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
