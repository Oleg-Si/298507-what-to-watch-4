import * as React from 'react';
import {Subtract} from 'utility-types';

interface State {
  activeTab: string
}

interface InjectingProps {
  onTabClick: () => void,
  activeTab: string
}

const withActiveTab = (Component) => {

  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithActiveTab extends React.PureComponent<T, State> {
    constructor(props: T) {
      super(props);

      this.state = {
        activeTab: this.props.activeTab
      };

      this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(newTab: string) {
      this.setState({activeTab: newTab});
    }

    render() {
      return (
        <Component
          {...this.props}
          onTabClick={(newTab: string) => {
            this._handleClick(newTab);
            this.props.onTabClick(newTab);
          }}
          activeTab={this.state.activeTab}
        />
      );
    }
  }

  return WithActiveTab;
};

export default withActiveTab;
