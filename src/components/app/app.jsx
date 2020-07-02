import React, {PureComponent} from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FilmPage from '../film-page/film-page.jsx';

const Screens = {
  MAIN: `Main`,
  FILM_PAGE: `FilmPage`
};

const mockFilm = {
  id: 0,
  title: `Revenant`,
  img: `img/revenant.jpg`,
  genre: `Drama`,
  rating: `8.5`,
  releaseDate: 1552915226386,
  ratingCount: 148,
  description: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&aposs friend and protege.`, `Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&aposs lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],
  director: `Bill Murray`,
  starring: [`Edward Norton`, `Jude Law`, `Willem Dafoe and other`, `Wes Andreson`]
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
    const {promoFilmMock} = this.props;
    const screen = this.state.activeScreen;

    switch (screen) {
      case Screens.MAIN:
        return (
          <Main
            promoFilmMock={promoFilmMock}
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
            <FilmPage activeFilm={mockFilm} />
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
  })
};

export default App;
