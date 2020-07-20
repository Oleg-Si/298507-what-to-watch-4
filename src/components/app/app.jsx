import React, {PureComponent} from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {Router, Switch, Route, Link} from 'react-router-dom';
import FilmPage from '../film-page/film-page.jsx';
import {connect} from 'react-redux';
import {AppRoute} from '../../constants.js';
import {getAuthorizationStatusCode} from '../../redux/user/selectors.js';
import SignIn from './../sign-in/sign-in.jsx';
import userOperations from './../../redux/user/operations';
import AddReview from './../add-review/add-review.jsx';
import history from './../../history';
import {getIsLoadedFilms, getIsLoadedFavoriteFilms} from './../../redux/data/selectors';
import Preloader from '../preloader/preloader.jsx';
import PrivateRoute from './../private-route/private-route.jsx';
import MyList from '../my-list/my-list.jsx';

class App extends PureComponent {
  render() {
    const {
      onSignIn,
      authorizationStatusCode,
      isLoadedFilms,
      isLoadedFavoriteFilms
    } = this.props;

    return (
      <Router
        history={history}
      >
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            <Main />
          </Route>

          <Route exact path={AppRoute.LOGIN}>
            <SignIn
              authorizationStatusCode={authorizationStatusCode}
              onSubmit={onSignIn}
            />
          </Route>

          <PrivateRoute
            exact
            path={AppRoute.MY_LIST}
            render={() => {
              return (
                isLoadedFavoriteFilms ? <MyList /> : <Preloader />
              );
            }}
          />

          <Route
            exact
            path={`${AppRoute.FILM}/:filmId`}
            render={(props) => {
              return (
                isLoadedFilms ? <FilmPage filmId={props.match.params.filmId} /> : <Preloader />
              );
            }}
          />

          <PrivateRoute
            exact
            path={`${AppRoute.FILM}/:filmId${AppRoute.ADD_REVIEW}`}
            render={(props) => {
              return (
                isLoadedFilms ? <AddReview filmId={props.match.params.filmId} /> : <Preloader />
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

App.propTypes = {
  authorizationStatusCode: PropTypes.number,
  onSignIn: PropTypes.func.isRequired,
  isLoadedFilms: PropTypes.bool.isRequired,
  isLoadedFavoriteFilms: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatusCode: getAuthorizationStatusCode(state),
  isLoadedFilms: getIsLoadedFilms(state),
  isLoadedFavoriteFilms: getIsLoadedFavoriteFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSignIn(authData) {
    dispatch(userOperations.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
