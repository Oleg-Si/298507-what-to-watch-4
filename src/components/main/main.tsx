import * as React from 'react';
import FilmList from '../film-list/film-list';
import GenreFilter from '../genre-filter/genre-filter';
import {connect} from 'react-redux';
import dataActionCreator from '../../redux/data/action-creator';
import appActionCreator from '../../redux/app/action-creator';
import {DEFAULT_GENRE, AppRoute, AuthorizationStatus} from '../../constants';
import ShowMore from '../show-more/show-more';
import {getPromoFilm, getFilteredFilmsByGenre, getFilms} from '../../redux/data/selectors';
import {getActiveGenre, getCountFilmsForRender, getPromoFilmStatus} from '../../redux/app/selectors';
import {getAuthorizationStatus, getUserAvatar} from '../../redux/user/selectors';
import AppHeaderMovieCard from '../app-header-movie-card/app-header-movie-card';
import AppFooter from '../app-footer/app-footer';
import dataOperations from '../../redux/data/operations';
import userOperations from '../../redux/user/operations';
import history from '../../history';
import {FilmInterface} from './../../types';

interface Props {
  promoFilm: FilmInterface;
  films: FilmInterface[];
  filteredFilms: FilmInterface[];

  onFilmCardTitleClick: (film: FilmInterface) => void;
  onGenreCilck: (newGenre: string) => void;
  activeGenre: string;
  filmsCount: number;
  promoFilmStatus: boolean;
  onShowMoreClick: () => void;
  onFavorite: (filmId: number, status: number) => void;
  onPlayClick: (filmId: number) => void;
  onMyListClick: () => void;
  authorizationStatus: AuthorizationStatus;
  userAvatar: string;
}

const Main: React.FC<Props> = (props: Props) => {
  const {
    promoFilm,
    films,
    filteredFilms,
    onGenreCilck,
    activeGenre,
    onFilmCardTitleClick,
    filmsCount,
    onShowMoreClick,
    authorizationStatus,
    userAvatar,
    onFavorite,
    onMyListClick,
    promoFilmStatus,
    onPlayClick
  } = props;

  const getAllgenres = (filmsData: FilmInterface[]) => {
    const allGenres = new Set();
    allGenres.add(DEFAULT_GENRE);

    filmsData.forEach((film) => {
      allGenres.add(film.genre);
    });

    return allGenres;
  };

  const genres = getAllgenres(films);

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoFilm.bgImg} alt={promoFilm.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <AppHeaderMovieCard
          authorizationStatus={authorizationStatus}
          userAvatar={userAvatar}
          onMyListClick={onMyListClick}
        />

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
                <button className="btn btn--play movie-card__button" type="button" onClick={() => {
                  onPlayClick(promoFilm.id);
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
                  onFavorite(promoFilm.id, +!promoFilmStatus);
                }}>
                  {promoFilmStatus
                    ? <svg viewBox="0 0 18 14" width="18" height="14"><use xlinkHref="#in-list"></use></svg>
                    : <svg viewBox="0 0 19 20" width="19" height="20"><use xlinkHref="#add"></use></svg>
                  }
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
            genres={Array.from(genres)}
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

        <AppFooter />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  activeGenre: getActiveGenre(state),
  films: getFilms(state),
  promoFilm: getPromoFilm(state),
  filmsCount: getCountFilmsForRender(state),
  filteredFilms: getFilteredFilmsByGenre(state),
  authorizationStatus: getAuthorizationStatus(state),
  userAvatar: getUserAvatar(state),
  promoFilmStatus: getPromoFilmStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onGenreCilck(newGenre) {
    dispatch(appActionCreator.genreFilterChange(newGenre));
    dispatch(dataActionCreator.filterFilmsByGenre());
  },

  onShowMoreClick(filmsCount) {
    dispatch(appActionCreator.showMoreFilms(filmsCount));
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

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
