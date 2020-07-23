import * as React from 'react';
import {APIErrorsCode, AppRoute} from '../../constants';
import {Link} from 'react-router-dom';
import AppFooter from '../app-footer/app-footer';

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this._formRef = React.createRef();
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(evt) {
    evt.preventDefault();

    const form = this._formRef.current;

    const login = form.querySelector(`#user-email`).value;
    const password = form.querySelector(`#user-password`).value;

    const authData = {
      login,
      password
    };

    this.props.onSubmit(authData);
  }

  _isIncorrectValue() {
    if (this.props.authorizationStatusCode === APIErrorsCode.BAD_REQUEST) {
      return (
        <div className="sign-in__message">
          <p>Please enter a valid email address</p>
        </div>
      );
    }

    return null;
  }

  render() {
    const code = this.props.authorizationStatusCode;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link
              className="logo__link"
              to={AppRoute.ROOT}
            >
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" ref={this._formRef} onSubmit={this._handleSubmit}>
            {this._isIncorrectValue()}
            <div className="sign-in__fields">
              <div className={`sign-in__field ${code === APIErrorsCode.BAD_REQUEST ? `sign-in__field--error` : ``}`} >
                <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <AppFooter />
      </div>
    );
  }
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  authorizationStatusCode: PropTypes.number,
};

export default SignIn;
