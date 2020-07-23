import * as React from 'react';
import Main from '../main/main';
import {Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import FilmPage from '../film-page/film-page';
import {connect} from 'react-redux';
import {AppRoute, preloaderMainStyle, AuthorizationStatus} from '../../constants';
import {getAuthorizationStatusCode, getAuthorizationStatus} from '../../redux/user/selectors';
import SignIn from '../sign-in/sign-in';
import userOperations from '../../redux/user/operations';
import AddReview from '../add-review/add-review';
import history from '../../history';
import {getIsLoadedFilms, getIsLoadedFavoriteFilms, getIsLoadedPromoFilms} from '../../redux/data/selectors';
import Preloader from '../preloader/preloader';
import PrivateRoute from '../private-route/private-route';
import MyList from '../my-list/my-list';
import Player from '../player/player';

interface Props {
  authorizationStatusCode: number | null,
  onSignIn: (authData: {login: string, password: string}) => void,
  isLoadedFilms: boolean,
  authorizationStatus: AuthorizationStatus,
  isLoadedFavoriteFilms: boolean,
  isLoadedPromoFilm: boolean
}

class App extends React.PureComponent<Props> {
  render() {
    const {
      onSignIn,
      authorizationStatusCode,
      authorizationStatus,
      isLoadedFilms,
      isLoadedPromoFilm,
      isLoadedFavoriteFilms
    } = this.props;

    return (
      <Router history={history} >
        <Switch>
          <Route
            exact
            path={AppRoute.ROOT}
            render={() => {
              return (
                (isLoadedFilms && isLoadedPromoFilm) ? <Main /> : <Preloader style={preloaderMainStyle} />
              );
            }}
          />

          <Route
            exact
            path={AppRoute.LOGIN}
            render={() => {
              return (
                authorizationStatus === AuthorizationStatus.AUTH
                  ? <Redirect to={AppRoute.ROOT} />
                  : <SignIn
                    authorizationStatusCode={authorizationStatusCode}
                    onSubmit={onSignIn}
                  />
              );
            }}
          />

          <PrivateRoute
            exact
            path={AppRoute.MY_LIST}
            render={() => {
              return (
                isLoadedFavoriteFilms ? <MyList /> : <Preloader style={preloaderMainStyle} />
              );
            }}
          />

          <Route
            exact
            path={`${AppRoute.FILM}/:filmId`}
            render={(props) => {
              return (
                isLoadedFilms ? <FilmPage filmId={props.match.params.filmId} /> : <Preloader style={preloaderMainStyle} />
              );
            }}
          />

          <PrivateRoute
            exact
            path={`${AppRoute.FILM}/:filmId${AppRoute.ADD_REVIEW}`}
            render={(props) => {
              return (
                isLoadedFilms ? <AddReview filmId={props.match.params.filmId} /> : <Preloader style={preloaderMainStyle} />
              );
            }}
          />

          <Route
            exact
            path={`${AppRoute.PLAYER}/:filmId`}
            render={(props) => {
              return (
                isLoadedFilms
                  ? <Player
                    filmId={props.match.params.filmId}
                    isMuted={false}
                  />
                  : <Preloader style={preloaderMainStyle} />
              );
            }}
          />

          <Route
            render={() => (
              <React.Fragment>
                <h1>
                  404.
                  <br />
                  <small>Page not found</small>
                </h1>
                <Link to={AppRoute.ROOT}>Go to main page</Link>
              </React.Fragment>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  authorizationStatusCode: getAuthorizationStatusCode(state),
  authorizationStatus: getAuthorizationStatus(state),
  isLoadedFilms: getIsLoadedFilms(state),
  isLoadedFavoriteFilms: getIsLoadedFavoriteFilms(state),
  isLoadedPromoFilm: getIsLoadedPromoFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSignIn(authData) {
    dispatch(userOperations.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
