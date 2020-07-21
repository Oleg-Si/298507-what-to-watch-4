import React from 'react';
import PropTypes from 'prop-types';
import withSendForm from '../../hocs/with-send-form/with-send-form.jsx';
import AppHeader from '../app-header/app-header.jsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants.js';
import {connect} from 'react-redux';
import {getCurrentFilm} from '../../redux/data/selectors.js';
import {getUserAvatar, getAuthorizationStatus} from './../../redux/user/selectors';
import userOperations from './../../redux/user/operations';

const AddReview = (props) => {
  const {
    isValid,
    isSend,
    onCheckValidCommentLength,
    onSend,
    authorizationStatus,
    onAddReviews,
    userAvatar,
    film,
    filmId
  } = props;

  const formRef = React.createRef();

  const onSubmit = () => {
    const rating = formRef.current.querySelector(`input[name="rating"]:checked`).value;
    const comment = formRef.current.querySelector(`#review-text`).value;

    const reviewData = {
      id: filmId,
      rating,
      comment
    };

    onAddReviews(reviewData);
  };

  return (
    <section className="movie-card movie-card--full" style={{backgroundColor: film.bgColor}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.bgImg} alt={film.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <AppHeader
          authorizationStatus={authorizationStatus}
          userAvatar={userAvatar}
        >
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link
                  className="breadcrumbs__link"
                  to={`${AppRoute.FILM}/${film.id}`}
                >{film.title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </AppHeader>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.poster} alt={`${film.poster} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" ref={formRef} onSubmit={(evt) => {
          evt.preventDefault();
          onSubmit();
          onSend();
        }}>
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={(evt) => {
              onCheckValidCommentLength(evt.target.value.length);
            }}></textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={!isValid || isSend}
                style={((isValid && !isSend) ? {opacity: 1, cursor: `pointer`} : {opacity: 0.5, cursor: `not-allowed`})}
              >Post</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

AddReview.propTypes = {
  onCheckValidCommentLength: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  isSend: PropTypes.bool.isRequired,
  onAddReviews: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  userAvatar: PropTypes.string,
  film: PropTypes.object.isRequired,
  filmId: PropTypes.string.isRequired
};

const mapStateToProps = (state, props) => ({
  film: getCurrentFilm(state, props.filmId),
  userAvatar: getUserAvatar(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onAddReviews(reviews) {
    dispatch(userOperations.createReview(reviews));
  }
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(withSendForm(AddReview));
