import * as React from 'react';

const ShowMore = (props) => {
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

ShowMore.propTypes = {
  onShowMoreClick: PropTypes.func.isRequired,
  filmsCount: PropTypes.number.isRequired,
  allFilmsCount: PropTypes.number.isRequired
};

export default ShowMore;
