import * as React from 'react';

const withActiveTab = (Component) => {
  class WithActiveTab extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: this.props.activeTab
      };

      this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(newTab) {
      this.setState({activeTab: newTab});
    }

    render() {
      return (
        <Component
          {...this.props}
          onTabClick={(newTab) => {
            this._handleClick(newTab);
            this.props.onTabClick(newTab);
          }}
          activeTab={this.state.activeTab}
        />
      );
    }
  }

  WithActiveTab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    onTabClick: PropTypes.func.isRequired
  };

  return WithActiveTab;
};

export default withActiveTab;
