import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {TabList} from './tab-list';

const Tabs: string[] = [
  `Overview`,
  `Details`,
  `Reviews`
];

Enzyme.configure({
  adapter: new Adapter()
});

it(`Клик на таб вызывает коллбэк и передает корректное значение`, () => {
  const onTabClick = jest.fn();

  const tabList = Enzyme.shallow(
      <TabList
        tabs={Tabs}
        activeTab={`Overview`}
        onTabClick={onTabClick}
      />
  );

  const tab = tabList.find(`a.movie-nav__link`);

  tab.at(1).simulate(`click`, {preventDefault: () => null});

  expect(onTabClick).toHaveBeenCalledTimes(1);
});
