import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from './film-card.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Сlick on the title should cause a callback`, () => {
  const onFilmCardTitleClick = jest.fn();

  const filmCard = shallow(
      <FilmCard
        title={`Macbeth`}
        onFilmCardTitleClick={onFilmCardTitleClick}
      />
  );

  const title = filmCard.find(`a.small-movie-card__link`);

  title.simulate(`click`);

  expect(onFilmCardTitleClick.mock.calls.length).toBe(1);
});
