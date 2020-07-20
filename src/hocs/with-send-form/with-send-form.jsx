import React, {PureComponent} from 'react';

const ValidationParameters = {
  TEXT: {
    MIN: 50,
    MAX: 400
  }
};

const withSendForm = (Component) => {
  class WithSendForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isValid: false,
        isSend: false
      };

      this._handleCheckValidCommentLength = this._handleCheckValidCommentLength.bind(this);
      this._handleSend = this._handleSend.bind(this);
    }

    _handleSend() {
      this.setState({isSend: true});
    }

    _handleCheckValidCommentLength(commentLength) {
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
