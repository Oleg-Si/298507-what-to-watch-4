import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withSendForm = (Component) => {
  class WithSendForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isCorrectCommentLength: false,
      };

      this._formRef = React.createRef();

      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleTextareaChange = this._handleTextareaChange.bind(this);
    }

    _handleSubmit() {
      const form = this._formRef.current;

      const id = this.props.filmId;
      const rating = form.querySelector(`input[name="rating"]:checked`).value;
      const comment = form.querySelector(`#review-text`).value;

      const reviewData = {
        id,
        rating,
        comment
      };

      this.props.onSubmit(reviewData);
    }

    _handleTextareaChange() {
      const form = this._formRef.current;
      const textarea = form.querySelector(`#review-text`);

      const commentLenght = textarea.value.length;

      if (commentLenght >= 50 && commentLenght <= 400) {
        if (this.state.isCorrectCommentLength === false) {
          this.setState({isCorrectCommentLength: true});
        }
      } else {
        if (this.state.isCorrectCommentLength === true) {
          this.setState({isCorrectCommentLength: false});
        }
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          isCorrectCommentLength={this.state.isCorrectCommentLength}
          onSubmit={this._handleTextareaChange}
          onTextareaChange={this._handleTextareaChange}
          formRef={this._formRef}
        />
      );
    }
  }

  WithSendForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    filmId: PropTypes.number.isRequired
  };

  return WithSendForm;
};

export default withSendForm;
