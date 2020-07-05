import React from 'react';
import PropTypes from 'prop-types';
import {Tabs} from '../../constants';

const TabList = (props) => {
  const {activeTab, onTabClick} = props;

  return (
    <ul className="movie-nav__list">
      {Tabs.map((el) => (
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
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired
};

export default TabList;
