import * as React from 'react';
import withActiveTab from '../../hocs/with-active-tab/with-active-tab';

interface Props {
  genres: string[];
  activeTab: string;
  onTabClick: (newTab: string) => void;
}

const GenreFilter: React.FC<Props> = (props: Props) => {
  const {genres, activeTab, onTabClick} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => {
        return (
          <li className={`catalog__genres-item ${genre === activeTab ? `catalog__genres-item--active` : ``}`} key={`genre-${genre}`}>
            <a href="#" className="catalog__genres-link" onClick={(evt) => {
              evt.preventDefault();
              onTabClick(genre);
            }}>{genre}</a>
          </li>
        );
      })}

    </ul>
  );
};

export {GenreFilter};
export default withActiveTab(GenreFilter);
