import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {TabList} from './tab-list.jsx';

const Tabs = [
  `Overview`,
  `Details`,
  `Reviews`
];

Enzyme.configure({
  adapter: new Adapter()
});

it(`Клик на таб вызывает коллбэк и передает корректное значение`, () => {
  const onTabClick = jest.fn();

  const tabList = shallow(
      <TabList
        tabs={Tabs}
        activeTab={`Overview`}
        onTabClick={onTabClick}
      />
  );

  const tab = tabList.find(`a.movie-nav__link`);

  tab.at(1).simulate(`click`, {preventDefault() {}});

  expect(onTabClick).toHaveBeenCalledTimes(1);
});
