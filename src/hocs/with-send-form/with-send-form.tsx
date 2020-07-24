import * as React from 'react';
import {Subtract} from 'utility-types';

interface State {
  isValid: boolean;
  isSend: boolean;
}

interface InjectingProps {
  isValid: boolean;
  isSend: boolean;
  onCheckValidCommentLength: (commentLength: number) => void;
  onSend: () => void;
}

const ValidationParameters = {
  TEXT: {
    MIN: 50,
    MAX: 400
  }
};

const withSendForm = (Component) => {

  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithSendForm extends React.PureComponent<T, State> {
    constructor(props: T) {
      super(props);

      this.state = {
        isValid: false,
        isSend: false
      };

      this._handleCheckValidCommentLength = this._handleCheckValidCommentLength.bind(this);
      this._handleSend = this._handleSend.bind(this);
    }

    _handleSend() {
      this.setState((prevState) => ({isSend: !prevState.isSend}));
    }

    _handleCheckValidCommentLength(commentLength: number) {
      if (commentLength >= ValidationParameters.TEXT.MIN && commentLength <= ValidationParameters.TEXT.MAX) {
        if (this.state.isValid === false) {
          this.setState({isValid: true});
        }
      } else {
        if (this.state.isValid === true) {
          this.setState({isValid: false});
        }
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          isValid={this.state.isValid}
          isSend={this.state.isSend}
          onCheckValidCommentLength={this._handleCheckValidCommentLength}
          onSend={this._handleSend}
        />
      );
    }
  }

  return WithSendForm;
};

export default withSendForm;
