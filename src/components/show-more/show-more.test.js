import React from 'react';
import renderer from 'react-test-renderer';
import ShowMore from './show-more.jsx';

describe(`Проверяет снепшоты компонента ShowMore`, () => {
  it(`Проверяет снепшот компонента ShowMore с кнопкой`, () => {
    const tree = renderer.create(
        <ShowMore
          allFilmsCount={8}
          filmsCount={5}
          onShowMoreClick={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Проверяет снепшот компонента ShowMore без кнопки`, () => {
    const tree = renderer.create(
        <ShowMore
          allFilmsCount={8}
          filmsCount={10}
          onShowMoreClick={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
