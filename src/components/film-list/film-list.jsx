import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';

class FilmList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._handlerFilmCardMouseEnter = this._handlerFilmCardMouseEnter.bind(this);
  }

  _handlerFilmCardMouseEnter(film) {
    // Наведение на карточку фильма
    this.setState({
      activeCard: film
    });
  }

  render() {
    const {films, onFilmCardTitleClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => (
          <FilmCard
            film={film}
            onFilmCardMouseEnter={this._handlerFilmCardMouseEnter}
            onFilmCardTitleClick={onFilmCardTitleClick}
            key={film.id}
          />
        ))}
      </div>
    );
  }
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
      })
  ).isRequired,
  onFilmCardTitleClick: PropTypes.func.isRequired
};

export default FilmList;
