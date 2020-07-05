import React from 'react';
import renderer from 'react-test-renderer';
import TabList from './tab-list.jsx';

const Tabs = [
  `Overview`,
  `Details`,
  `Reviews`
];

it(`Проверяет снепшот компонента TabList`, () => {
  const tree = renderer.create(
      <TabList
        tabs={Tabs}
        activeTab={`Overview`}
        onTabClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
