import * as React from 'react';
import withActiveTab from '../../hocs/with-active-tab/with-active-tab';

interface Props {
  genre: string[];
  activeTab: string;
  onTabClick: (newTab: string) => void;
}

const GenreFilter: React.FC<Props> = (props: Props) => {
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

export {GenreFilter};
export default withActiveTab(GenreFilter);
