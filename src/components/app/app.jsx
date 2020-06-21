import React, {PureComponent} from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FilmPage from '../film-page/film-page.jsx';

const Screens = {
  MAIN: `Main`,
  FILM_PAGE: `FilmPage`
};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeScreen: Screens.MAIN,
      activeFilm: {}
    };

    this._handlerFilmCardTitleClick = this._handlerFilmCardTitleClick.bind(this);
  }

  _handlerFilmCardTitleClick(film) {
    // Клик по заголовку карточки фильма
    this.setState({
      activeScreen: Screens.FILM_PAGE,
      activeFilm: film
    });
  }

  _renderApp() {
    const {films, promoFilmMock} = this.props;
    const screen = this.state.activeScreen;

    switch (screen) {
      case Screens.MAIN:
        return (
          <Main
            promoFilmMock={promoFilmMock}
            films={films}
            onFilmCardTitleClick={this._handlerFilmCardTitleClick}
          />
        );

      case Screens.FILM_PAGE:
        return (
          <FilmPage activeFilm={this.state.activeFilm} />
        );
    }

    return null;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <FilmPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
      })
  ).isRequired,
  promoFilmMock: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
};

export default App;
