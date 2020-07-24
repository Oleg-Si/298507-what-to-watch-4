import * as React from 'react';
import * as renderer from 'react-test-renderer';
import TabList from './tab-list';

const Tabs: string[] = [
  `Overview`,
  `Details`,
  `Reviews`
];

it(`Проверяет снепшот компонента TabList`, () => {
  const tree = renderer.create(
      <TabList
        tabs={Tabs}
        activeTab={`Overview`}
        onTabClick={() => null}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
