import * as React from 'react';
import {APIErrorsCode, AuthorizationStatus} from '../../constants';
import AppFooter from '../app-footer/app-footer';
import AppHeaderMyList from '../app-header-my-list/app-header-my-list';
import {connect} from 'react-redux';
import dataOperations from './../../redux/data/operations';
import {getUserAvatar, getAuthorizationStatus} from './../../redux/user/selectors';

interface Props {
  onSubmit: (authData: {login: string; password: string}) => void;
  authorizationStatusCode: number;
  onMyListClick: () => void;
  authorizationStatus: AuthorizationStatus;
  userAvatar: string;
}

class SignIn extends React.PureComponent<Props> {
  private _formRef: React.RefObject<HTMLFormElement>;

  constructor(props) {
    super(props);

    this._formRef = React.createRef();
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(evt) {
    evt.preventDefault();

    const form = this._formRef.current;

    const login = form.querySelector<HTMLInputElement>(`#user-email`).value;
    const password = form.querySelector<HTMLInputElement>(`#user-password`).value;

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
    const {
      authorizationStatus,
      userAvatar,
      onMyListClick
    } = this.props;

    return (
      <div className="user-page">
        <AppHeaderMyList
          authorizationStatus={authorizationStatus}
          userAvatar={userAvatar}
          onMyListClick={onMyListClick}
        >
          <h1 className="page-title user-page__title">Sign in</h1>
        </AppHeaderMyList>

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

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userAvatar: getUserAvatar(state)
});

const mapDispatchToProps = (dispatch) => ({
  onMyListClick() {
    dispatch(dataOperations.loadFavoriteFilms());
  }
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
