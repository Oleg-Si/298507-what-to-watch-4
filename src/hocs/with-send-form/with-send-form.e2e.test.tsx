import * as React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withSendForm from './with-send-form.js';

Enzyme.configure({
  adapter: new Adapter()
});

const Component = () => {
  return (
    <div>
      <p>Component</p>
    </div>
  );
};

const ValidationParameters = {
  TEXT: {
    MIN: 50,
    MAX: 400
  }
};

const WrappedComponent = withSendForm(Component);

it(`Проверяет состояния хок withSendForm`, () => {
  const element = mount(<WrappedComponent />);

  element.setState({isSend: false});
  element.instance()._handleSend();
  expect(element.state(`isSend`)).toBe(true);

  element.setState({isValid: false});
  element.instance()._handleCheckValidCommentLength(ValidationParameters.TEXT.MIN);
  expect(element.state(`isValid`)).toBe(true);

  element.instance()._handleCheckValidCommentLength(ValidationParameters.TEXT.MAX + 1);
  expect(element.state(`isValid`)).toBe(false);

  element.instance()._handleCheckValidCommentLength(ValidationParameters.TEXT.MAX);
  expect(element.state(`isValid`)).toBe(true);

  element.instance()._handleCheckValidCommentLength(ValidationParameters.TEXT.MIN - 1);
  expect(element.state(`isValid`)).toBe(false);


  element.setState({isValid: true});
  element.instance()._handleCheckValidCommentLength(ValidationParameters.TEXT.MIN);
  expect(element.state(`isValid`)).toBe(true);

  element.setState({isValid: false});
  element.instance()._handleCheckValidCommentLength(ValidationParameters.TEXT.MIN - 1);
  expect(element.state(`isValid`)).toBe(false);
});
