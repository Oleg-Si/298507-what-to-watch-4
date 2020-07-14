import React, {PureComponent} from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FilmPage from '../film-page/film-page.jsx';
import {connect} from 'react-redux';
import {mockFilmForTests} from '../../mock/films.js';
import {ActionCreator} from './../../redux/action-creator';
import {Screens} from '../../constants.js';

class App extends PureComponent {
  _renderApp() {
    const {promoFilmMock, screen, onFilmCardTitleClick, activeFilm} = this.props;

    switch (screen) {
      case Screens.MAIN:
        return (
          <Main
            promoFilmMock={promoFilmMock}
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
  promoFilmMock: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }),
  screen: PropTypes.string.isRequired,
  onFilmCardTitleClick: PropTypes.func.isRequired,
  activeFilm: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  promoFilmMock: state.promoFilmMock,
  screen: state.currentScreen,
  activeFilm: state.selectedFilm
});

const mapDispatchToProps = (dispatch) => ({
  onFilmCardTitleClick(film) {
    dispatch(ActionCreator.selectsFilm(film));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
