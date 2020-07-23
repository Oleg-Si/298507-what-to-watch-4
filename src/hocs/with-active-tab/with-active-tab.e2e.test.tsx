import * as React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveTab from './with-active-tab.js';

Enzyme.configure({
  adapter: new Adapter()
});

interface MockComponentProps {
  onTabClick: (newTab: string) => void
}

const Component: React.FC<MockComponentProps> = (props: MockComponentProps) => {
  const {onTabClick} = props;

  return (
    <div>
      <button onClick={() => {
        onTabClick(`Details`);
      }}/>
    </div>
  );
};

const WrappedComponent = withActiveTab(Component);

it(`Клик на таб меняет стейт хока на переданный`, () => {
  const onTabClick = jest.fn();
  const defaultTab = `Overview`;

  const tree = mount(
      <WrappedComponent
        activeTab={defaultTab}
        onTabClick={onTabClick}
      />
  );

  // Проверяем дефолтное значение
  expect(tree.state(`activeTab`)).toEqual(defaultTab);

  tree.find(`button`).simulate(`click`, {preventDefault() {}});

  // Проверяем что обработчик вызван
  expect(onTabClick).toHaveBeenCalledTimes(1);

  // Проверяем что установлено переданное значение
  expect(tree.state(`activeTab`)).toEqual(`Details`);
});
