import React from 'react';
import PropTypes from 'prop-types';
import FilmList from './../film-list/film-list.jsx';
import GenreFilter from '../genre-filter/genre-filter.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../redux/action-creator';
import {DEFAULT_GENRE} from './../../constants';
import ShowMore from '../show-more/show-more.jsx';

const Main = (props) => {
  const {
    promoFilmMock,
    films,
    filteredFilms,
    onGenreCilck,
    activeGenre,
    onFilmCardTitleClick,
    filmsCount,
    onShowMoreClick
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

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
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
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoFilmMock.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoFilmMock.genre}</span>
                <span className="movie-card__year">{promoFilmMock.date}</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreFilter
            genre={genre}
            activeGenre={activeGenre}
            onGenreCilck={onGenreCilck}
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
  promoFilmMock: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
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
  onShowMoreClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
  films: state.films,
  filmsCount: state.countFilmsForRender,
  filteredFilms: state.filteredFilmsByGenre
});

const mapDispatchToProps = (dispatch) => ({
  onGenreCilck(newGenre) {
    dispatch(ActionCreator.genreFilterChange(newGenre));
    dispatch(ActionCreator.filterFilmsByGenre(newGenre));
  },

  onShowMoreClick() {
    dispatch(ActionCreator.showMoreFilms());
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
