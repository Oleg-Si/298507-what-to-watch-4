import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {FilmCard} from './film-card';
import {mockFilmForTests} from '../../mock/films';
import {Router} from 'react-router-dom';
import history from '../../history';

Enzyme.configure({
  adapter: new Adapter()
});

const mockEvent = {
  preventDefault: () => null
};

it(`Клик на заголовок вызывает коллбэк`, () => {
  const onFilmCardTitleClick = jest.fn();
  const onPlay = jest.fn();
  const onStop = jest.fn();

  const filmCard = Enzyme.mount(
      <Router
        history={history}
      >
        <FilmCard
          film={mockFilmForTests}
          onFilmCardTitleClick={onFilmCardTitleClick}
          onPlay={onPlay}
          onStop={onStop}
          onReady={() => null}
          controls={false}
          isMuted={true}
          isPlaying={false}
          isReady={true}
        />
      </Router>
  );

  const title = filmCard.find(`a.small-movie-card__link`);
  const card = filmCard.find(`.small-movie-card`);

  card.simulate(`mouseenter`);
  card.simulate(`mouseleave`);
  title.at(0).simulate(`click`, mockEvent);

  // Обработчик был вызван 1 раз
  expect(onFilmCardTitleClick).toHaveBeenCalledTimes(1);
  expect(onFilmCardTitleClick.mock.calls[0][0]).toMatchObject(mockFilmForTests);

  expect(onPlay).toHaveBeenCalledTimes(1);
  expect(onStop).toHaveBeenCalledTimes(1);
});
