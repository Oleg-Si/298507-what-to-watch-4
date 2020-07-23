import * as React from 'react';
import withActiveTab from '../../hocs/with-active-tab/with-active-tab';

const TabList = (props) => {
  const {tabs, activeTab, onTabClick} = props;

  return (
    <ul className="movie-nav__list">
      {tabs.map((el) => (
        <li className={`movie-nav__item ${el === activeTab ? `movie-nav__item--active` : ``}`} key={`tab-${el}`}>
          <a href="#" className="movie-nav__link" onClick={(evt) => {
            evt.preventDefault();
            onTabClick(el);
          }}>{el}</a>
        </li>
      ))}
    </ul>
  );
};

TabList.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired
};

export {TabList};
export default withActiveTab(TabList);
