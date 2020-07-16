import React, {PureComponent} from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FilmPage from '../film-page/film-page.jsx';
import {connect} from 'react-redux';
import {mockFilmForTests} from '../../mock/films.js';
import appActionCreator from './../../redux/app/action-creator';
import {Screens} from '../../constants.js';
import {getCurrentScreen, getSelectedFilm} from '../../redux/app/selectors.js';
import {getAuthorizationStatusCode} from '../../redux/user/selectors.js';
import SignIn from './../sign-in/sign-in.jsx';
import userOperations from './../../redux/user/operations';
import dataOperations from './../../redux/data/operations';
import AddReview from './../add-review/add-review.jsx';
import {getAuthorizationStatus, getUserAvatar} from './../../redux/user/selectors';

class App extends PureComponent {
  _renderApp() {
    const {
      screen,
      onFilmCardTitleClick,
      activeFilm,
      onSignIn,
      authorizationStatusCode,
      onAddReviews,
      authorizationStatus,
      onSignInClick,
      userAvatar
    } = this.props;

    switch (screen) {
      case Screens.MAIN:
        return (
          <Main
            onFilmCardTitleClick={onFilmCardTitleClick}
          />
        );

      case Screens.FILM_PAGE:
        return (
          <FilmPage
            activeFilm={activeFilm}
            onFilmCardTitleClick={onFilmCardTitleClick}
          />
        );

      case Screens.SIGN_IN:
        return (
          <SignIn
            authorizationStatusCode={authorizationStatusCode}
            onSubmit={onSignIn}
          />
        );

      case Screens.ADD_REVIEW:
        return (
          <AddReview
            onSubmit={onAddReviews}
            film={activeFilm}
            onSignIn={onSignInClick}
            authorizationStatus={authorizationStatus}
            userAvatar={userAvatar}
          />
        );
    }

    return null;
  }

  render() {
    const {onFilmCardTitleClick} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <FilmPage
              activeFilm={mockFilmForTests}
              onFilmCardTitleClick={onFilmCardTitleClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  screen: PropTypes.string.isRequired,
  authorizationStatusCode: PropTypes.number,
  onFilmCardTitleClick: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
  onAddReviews: PropTypes.func.isRequired,
  activeFilm: PropTypes.object.isRequired,
  onSignInClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  userAvatar: PropTypes.string
};

const mapStateToProps = (state) => ({
  screen: getCurrentScreen(state),
  activeFilm: getSelectedFilm(state),
  authorizationStatusCode: getAuthorizationStatusCode(state),
  authorizationStatus: getAuthorizationStatus(state),
  userAvatar: getUserAvatar(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilmCardTitleClick(film) {
    dispatch(dataOperations.loadComments(film.id));
    dispatch(appActionCreator.selectsFilm(film));
  },

  onSignIn(authData) {
    dispatch(userOperations.login(authData));
  },

  onAddReviews(reviews) {
    dispatch(userOperations.createReview(reviews));
  },

  onSignInClick() {
    dispatch(appActionCreator.signIn(Screens.SIGN_IN));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
