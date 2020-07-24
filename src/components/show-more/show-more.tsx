import * as React from 'react';

interface Props {
  onShowMoreClick: (filmsCount: number) => void;
  filmsCount: number;
  allFilmsCount: number;
}

const ShowMore: React.FC<Props> = (props: Props) => {
  const {
    onShowMoreClick,
    filmsCount,
    allFilmsCount
  } = props;

  return (
    <div className="catalog__more">
      {filmsCount < allFilmsCount ? <button className="catalog__button" type="button" onClick={() => onShowMoreClick(filmsCount)}>Show more</button> : null}
    </div>
  );
};

export default ShowMore;
