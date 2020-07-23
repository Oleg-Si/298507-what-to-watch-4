import * as React from 'react';
import withSendForm from '../../hocs/with-send-form/with-send-form';
import AppHeader from '../app-header/app-header';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants';
import {connect} from 'react-redux';
import {getCurrentFilm} from '../../redux/data/selectors';
import {getUserAvatar, getAuthorizationStatus, getSendReviewErrorStatus} from '../../redux/user/selectors';
import userOperations from '../../redux/user/operations';
import dataOperations from '../../redux/data/operations';
import userActionCreator from '../../redux/user/action-creator';

const AddReview = (props) => {
  const {
    isValid,
    isSend,
    isError,
    onCheckValidCommentLength,
    changeIsErrorStatus,
    onSend,
    authorizationStatus,
    onAddReviews,
    userAvatar,
    film,
    filmId,
    onMyListClick
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
          onMyListClick={onMyListClick}
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

          {isError && <p style={{textAlign: `center`}}>Review is not send, please try again</p>}

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={(evt) => {
              onCheckValidCommentLength(evt.target.value.length);
              if (isError) {
                changeIsErrorStatus();
                onSend();
              }
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
  isError: PropTypes.bool.isRequired,
  onAddReviews: PropTypes.func.isRequired,
  changeIsErrorStatus: PropTypes.func.isRequired,
  onMyListClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  userAvatar: PropTypes.string,
  film: PropTypes.object.isRequired,
  filmId: PropTypes.string.isRequired
};

const mapStateToProps = (state, props) => ({
  film: getCurrentFilm(state, props.filmId),
  userAvatar: getUserAvatar(state),
  authorizationStatus: getAuthorizationStatus(state),
  isError: getSendReviewErrorStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onAddReviews(reviews) {
    dispatch(userOperations.createReview(reviews));
  },

  onMyListClick() {
    dispatch(dataOperations.loadFavoriteFilms());
  },

  changeIsErrorStatus() {
    dispatch(userActionCreator.sendReviewError(false));
  }
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(withSendForm(AddReview));
