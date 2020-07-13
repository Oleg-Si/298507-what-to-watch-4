import React from 'react';
import PropTypes from 'prop-types';
import withActiveTab from '../../hocs/with-active-tab/with-active-tab.jsx';

const GenreFilter = (props) => {
  const {genre, activeTab, onTabClick} = props;

  return (
    <ul className="catalog__genres-list">
      {genre.map((el) => {
        return (
          <li className={`catalog__genres-item ${el === activeTab ? `catalog__genres-item--active` : ``}`} key={`genre-${el}`}>
            <a href="#" className="catalog__genres-link" onClick={(evt) => {
              evt.preventDefault();
              onTabClick(el);
            }}>{el}</a>
          </li>
        );
      })}

    </ul>
  );
};

GenreFilter.propTypes = {
  genre: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired
};

export {GenreFilter};
export default withActiveTab(GenreFilter);
